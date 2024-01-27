const { db } = require('@vercel/postgres');
const {
  translations,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    // Create users table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        username VARCHAR(50) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    // Insert data into the users table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (name, username, email, password)
        VALUES (${user.name}, ${user.username}, ${user.email}, ${hashedPassword})
        ON CONFLICT (email) DO NOTHING;
      `;
      }),
    );

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedTranslations(client) {
  try {
    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS translations (
    id SERIAL PRIMARY KEY,
    translation VARCHAR(300) NOT NULL,
    value VARCHAR(300) NOT NULL
  );
`;

    console.log(`Created "translations" table`);

    // Insert data into translations table
    const insertedTranslations = await Promise.all(
      translations.map(
        (tra) => client.sql`
        INSERT INTO translations (translation, value)
        VALUES (${tra.translation}, ${tra.value});
      `,
      ),
    );

    console.log(`Seeded ${insertedTranslations.length} translations`);

    return {
      createTable,
      translations: insertedTranslations,
    };
  } catch (error) {
    console.error('Error seeding translations:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedTranslations(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
