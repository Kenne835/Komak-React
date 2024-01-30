# Komak-React

Komak is a medical application designed for the Pashtun people, as resources for Pashtuns are scarce in Minnesota and Pashtuns have to rely on a family member being available to interpret should an emergency situation arise. If a Pashtun has to go to the hospital and cannot find an interpreter, they can use Komak to fill out an intake form and communicate their symptoms and medical history to medical personell.

## Built With

React.js, Next.js, TailwindCSS, NextUI, PostgreSQL, MORE TBD.

## How to run locally

After cloning the project, run "npm i" to download packages and "npm run dev" to start on port 3000. 

To set up DB, navigate to https://vercel.com/ and deploy project, then select the "storage" tab and select create a Postgres DB, titled "komak-db", region set to default at Washington D.C., USA - (iad1). 

Add .env file to project base, and select "show secret" and "copy snippet" on vercel storage page to copy db secret. Paste in .env file. 

Run "npm i @vercel/postgres" in terminal, and finally "npm run seed" to run seed script and populate db.


## Road Map

Done:
Project Layout
Side Nav and links
Log in with Authentication
Basic user registration
Diagnostics Overview Page (UI only) 

To Do:
More comprehensive validation for user registration.
User Profile (view/edit user information, view/delete saved reports).
Diagnostics (overview logic, other page inputs/validation, post and get calls).
More detailed error handling, add alerts. 

