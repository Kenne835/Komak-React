'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { getUser } from '@/app/lib/data'
import { AuthError } from 'next-auth';
import { z } from 'zod';
const bcrypt = require('bcrypt');

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string()
});

const RegisterUser = FormSchema.omit({ id: true });

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }

  export type State = {
    errors?: {
      name?: string[];
      email?: string[];
      password?: string[];
    };
    message?: string | null;
  };

  export async function register(prevState: State, formData: FormData) {
        // Prepare data for insertion into the database
        const validatedFields = RegisterUser.safeParse({
          name: formData.get('name'),
          email: formData.get('email'),
          password: await bcrypt.hash(formData.get('password'), 10),
        });

        if (!validatedFields.success) {
          return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create User.',
          };
        }

        const { name, email, password } = validatedFields.data;

        const existingUser = await getUser(email);

        if (existingUser) return {
          message: 'Error: This email is already associated with a user.',
        };

        // Insert data into the database
        try {
            await sql`
            INSERT INTO users (name, email, password)
            VALUES (${name}, ${email}, ${password})
            `;
            redirect('/login');
        } catch (error) {
            // If a database error occurs, return a more specific error.
            return {
            message: 'Database Error: Failed to Create User.',
            };
        }
    }