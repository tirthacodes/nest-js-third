<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Users Management API

This API provides endpoints to manage users, their profiles, and posts.

I followed YouTube Tutorial '[NestJS, MySQL, TypeORM Crash Course](https://www.youtube.com/watch?v=W1gvIw0GNl8&list=PL_cUvD4qzbkw-phjGK2qq0nQiG6gw1cKK&index=5)' by Anson the Developer.

## Requirements

- Node.js (>=12.x)
- npm (>=6.x)
- Nest.js (>=8.x)
- MySQL Database

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tirthacodes/nest-js-third.git
   ```

2. Install dependencies:

   ```bash
   cd nest-js-third
   npm install
   ```

3. Set up the MySQL database:

   - Make sure you have MySQL installed.
   - Create a new database named `nestjs_mysql_tutorial`.

4. Configure the database connection:

   - Open `src/app.module.ts`.
   - Update the database connection details under the `TypeOrmModule.forRoot()` options.
   - Ensure the `entities` array includes the `User`, `Profile`, and `Post` entities.

5. Run the application:

   ```bash
   npm run start:dev
   ```

## Endpoints

- **GET /users:** Get all users, their profiles, and posts.
- **POST /users:** Create a new user.
- **PUT /users/:id:** Update a user by ID.
- **DELETE /users/:id:** Delete a user by ID.
- **POST /users/:id/profiles:** Create a profile for a user by ID.
- **POST /users/:id/posts:** Create a post for a user by ID.

### Sample Requests

#### Create User

- **Method:** POST
- **URL:** `/users`
- **Body:**
  ```json
  {
    "username": "newuser",
    "password": "newpassword"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "username": "newuser",
    "createdAt": "2023-08-10T12:34:56.789Z"
  }
  ```

#### Update User

- **Method:** PUT
- **URL:** `/users/:id`
- **Body:**
  ```json
  {
    "username": "updateduser",
    "password": "updatedpassword"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "username": "updateduser",
    "createdAt": "2023-08-10T12:34:56.789Z"
  }
  ```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for improvements, bug fixes, or new features.
