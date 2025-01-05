# MongoDB Node.js Application

This project demonstrates a simple Node.js application that performs CRUD (Create, Read, Update, Delete) operations on user profiles using MongoDB as the database.

## Features

- Create a new user profile
- Retrieve an existing user profile
- Update an existing user profile
- Delete a user profile


## Structure
MongoDB-node/
├── controllers/
│   └── Controller.js
├── models/
│   └── userModel.js
├── routes/
│   └── Routes.js
├── .env
├── server.js
└── package.json


server.js: Entry point of the application. Sets up the Express server and connects to MongoDB.
routes/Routes.js: Defines the API endpoints for profile operations.
controllers/Controller.js: Contains the logic for handling profile operations.
models/userModel.js: Defines the Mongoose schema and model for user profiles.
