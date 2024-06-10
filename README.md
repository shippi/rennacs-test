# Rennacs Coding Project Test
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Link to working web app: https://rennacs-test.vercel.app/
## Project Details
The entire coding project uses the Next.js 14 framework, and the repository contains both the front-end and the Users API. PostgreSQL is used for the database. Other libraries used are as listed:
<ul>
  <li>Prisma</li>
  <li>Zod</li>
  <li>Tailwind CSS</li>
  <li>Axios</li>
  <li>React Query</li>
</ul>

The project took about a couple of days to finish, working on it on-and-off while I found free time.

## Getting Started
A link to the working web app is provided at the top of the README. If you want to deploy the project locally, here are the instructions to do so:
#### 1. Set up a PostgreSQL database and use the CREATE TABLE statement in the `user_table.sql` file to create the users table.

#### 2. Install all dependencies for the project by running `npm i` command.

#### 3. Create an .env file, which contains the following variables:
 <ul>
    <li>DATABASE_URL="postgresql://janedoe:mypassword@localhost:5432/mydb?schema=sample"</li>
    <li>NEXT_PUBLIC_API_URL="http://localhost:3000/api/"</li>
  </ul>
<span style="font-size:0.9em;">
Note: The database URL is just an example and needs to be replaced by a URL of the Postgres database you're going to use. For more information, refer to this - https://www.prisma.io/docs/orm/reference/connection-urls
</span>

#### 4. Run `npx prisma db seed` to seed the database with dummy data.

#### 5. Run `npm run dev` to run the development server locally.

## API Routes

`GET` http://localhost:3000/api/users/[id]
> Get a particular user by their id

`GET` http://localhost:3000/api/users?limit=[number]&page=[number]
> Get a list of users based on the limit and page search parameters. These search parameters can be omitted and by default, limit=20 and page=1. This means that `GET` http://localhost:3000/api/users will grab the first group of 20 users.

`DEL` http://localhost:3000/api/users/[id]
> Deletes a user from the database based on the given id.


`POST` http://localhost:3000/api/users
> Creates a new row in the users table using the information provided in the body of the request. 
<br/><br/>
Body example:
<br/>
{
  <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;"first_name": "John",<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;"last_name": "Doe",<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;"address": "998 Heaphy Terrace, Fairfield, Hamilton, 3214",<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;"email": "JohnDoe@mail.com",<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;"phone_number": "(021) 123 4567"<br/>
} 
<br/><br/>
<span style="font-size:0.9em;">
Notes: <br/>
The address in the body must be in the format "Address, Suburb/Town, City, Postal Code".<br/>
Brackets, spaces, and dashes can be omitted from the phone_number field and still be valid.
</span>

`PUT` http://localhost:3000/api/users/[id]
> Updates the column(s) for a particular user based on the information passed in the body. All fields in the body example of the previous POST request are valid fields in the body of this PUT route.
<br/><br/>
Body example:
<br/>
{
  <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;"first_name": "Michael",<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;"email": "MichaelDoe@mail.com"<br/>
}
