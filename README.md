# Express PostgreSQL CRUD API

This project is a simple CRUD (Create, Read, Update, Delete) API built using **Express.js** and **PostgreSQL**. It provides endpoints to manage user data, including creating, retrieving, updating, and deleting users. The project is designed with modular architecture and includes input validation, error handling, and database connection pooling.

## Features

- **CRUD Operations**: Manage user data with endpoints for creating, reading, updating, and deleting users.
- **PostgreSQL Integration**: Uses PostgreSQL as the database with connection pooling.
- **Input Validation**: Validates user input using **Joi**.
- **Error Handling**: Centralized error handling middleware.
- **Environment Configuration**: Uses **dotenv** for environment variable management.
- **Modular Codebase**: Organized into controllers, models, routes, and middlewares.

## Project Structure
.gitignore package.json src/ .env server.js config/ db.js controllers/ userControllers.js data/ createUserTable.js data.sql middlewares/ errorHandler.js inputValidator.js models/ userModel.js routes/ userRoutes.j

## Prerequisites

- **Node.js** (v16 or higher)
- **PostgreSQL** (installed and running)
- **npm** (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/isaacudofia/express-postgre-crud-api.git
   cd express-postgre-crud-api

## Install Dependencies
    npm install

## Create a .env file in the src/ directory with following content
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_HOST=localhost
    DB_PORT=5432
    DB_DATABASE=your_database_name

## Create a users table in your PostgreSQL database
    node src/data/createUserTable.js

## Start the development server
    npm run dev


