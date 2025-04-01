# Jaguares Platform

## Description
Backend application made with NodeJs and Express to manage
* **User**
* **Students** (WIP)
* **Inventory** (WIP)

## Technologies
* **NodeJs**
* **TypeScript**
* **ExpressJs**
* **Graphql**
* **Apollo server V4**
* **Postgresql**
* **TypeORM**
* **Jest**

## Features
* **User Admin**
  * Login with an admin user
* **Students**
  * Get Paginated students
  * Get Single Student
  * Create Student
  * Update Student
  * Delete Student
* **Logger**
  * Handle app error
  * Save Errors on files
  * Unique Id for each request
* **Unit Testing**
  * Test the app with Jest

**More features are coming in the next versions.**

## Getting started
### Instalation
This is a **NodeJs** application, make sure that you have NodeJs and NPM installed.

If you don't have NodeJs installed, you can downloaded and install on [NodeJS Official Site](https://nodejs.org/en).

You can install all the requiered dependencies with the following command.

```
npm install
```

### Configuration
#### Env variables
A **.env** must be created with all the environment variables.

There's a file named **".env.example"** on **root path** where you can have an example of all the Environment Variable that the application needs.

**Note:** It's necessary have the following **Postgres Data Base Connection Information**.
```shell
DB_HOST=YOUR_DB_HOST
DB_PORT=YOUR_DB_PORT
DB_USERNAME=YOUR_DB_USERNAME
DB_PASSWORD=YOUR_DB_PASSWORD
DB_NAME=YOUR_DB_NAME
DB_SYNC=true # Value could be true or false
```

### Build
Now that You have all the dependencies installed and the .env file created and configured, It's time to build the application with the following command:

```
npm run build
```

This comman will create a **dist** folder with the app files builded into JS files.

### Run in Watch Mode
For development porpuses, you can run the application in watch mode with the following command, this will capture any change you made in the TypeScript code and build into JS code in dist folder.

```
npm run dev
```

**Note:** Make sure don't run this command before build at least once.

### Run
Run the application with the following command

```
npm run start
```

**Note:** Make sure don't run this command before build at least once.

### Test
You can test the application with **Jest**, You can create your test files into **src/tests**.

Run test with the following command:

```
npm run test
```
