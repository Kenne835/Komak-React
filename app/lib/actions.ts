'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
const bcrypt = require('bcrypt');

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

  export async function register(prevState: string | undefined, formData: FormData) {
        // Prepare data for insertion into the database
        const user = {
          name: formData.get('name')?.toString(),
          email: formData.get('email')?.toString(),
          password: await bcrypt.hash(formData.get('password'), 10),
        };

        // Insert data into the database
        try {
            await sql`
            INSERT INTO users (name, email, password)
            VALUES (${user.name}, ${user.email}, ${user.password})
            `;
            return { message: 'Successfully Registered.' };
            redirect('/login');
        } catch (error) {
            // If a database error occurs, return a more specific error.
            return {
            message: 'Database Error: Failed to Create User.',
            };
        }
    }