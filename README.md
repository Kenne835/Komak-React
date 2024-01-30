# Komak-React

Komak is a medical application designed for the Pashtun people, as resources for Pashtuns are scarce in Minnesota and Pashtuns have to rely on a family member being available to interpret should an emergency situation arise. If a Pashtun has to go to the hospital and cannot find an interpreter, they can use Komak to fill out an intake form and communicate their symptoms and medical history to medical personell. The application is built using sound clips so that a user who cannot read will be able to use the application, and a doctor would be able to read the translated results and email the results to themselves via nodemailer.

## Built With

React.js, Next.js, PostgreSQL. 

## How to run locally

After cloning the project, run "npm i" to download packages and "npm run dev" to start on port 3000. 

To set up DB, navigate to https://vercel.com/ and deploy project, then select the "storage" tab and select create a Postgres DB, titled "komak-db", region set to default at Washington D.C., USA - (iad1). 

Add .env file to project base, and select "show secret" and "copy snippet" on vercel storage page to copy db secret. Paste in .env file. 

Run "npm i @vercel/postgres" in terminal, and finally "npm run seed" to run seed script and populate db.
