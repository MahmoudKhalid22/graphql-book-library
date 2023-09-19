# GraphQL Book Library

## Description
The GraphQL Book Library is a web-based application that allows users to manage and explore a collection of books by various authors. It leverages GraphQL for efficient data retrieval and offers features for adding books, maintaining a reading list, and exploring authors and their works.

## Key Features
* GraphQL API for flexible and efficient data querying.
* Adding and managing books in a library.
* Maintaining a reading list of all books.
* Exploring authors and their books, including detailed author information.
  
## Technologies Used
* Client (React.js): The client-side of the application is built using React.js, a popular JavaScript library for building user interfaces.
* Apollo Client: Apollo Client is used for managing GraphQL queries and state.
* Server (Node.js/Express): The server-side is powered by Node.js and Express.js, providing the GraphQL API and handling server-side logic.
* Database (MongoDB): MongoDB is used as the database to store book and user information securely.
* GraphQL: GraphQL is used to define and query the API efficiently.

## Getting Started

### Client (React.js):
1. Clone the repository to your local machine.
2. Navigate to the client directory.
3. Install dependencies using npm install.
4. Start the client application with npm start.

### Server (Node.js/Express):
1. Navigate to the server directory.
2. Install dependencies using npm install.
3. Set up your MongoDB database and change the url in the index.js file in the clinet to 'http://localhost:5000/graphql'.
4. Start the server with npm start. You should see in the console, "Server is running," and it should be connected to the database.

## Usage
* After setting up both the client and server, you can access the GraphQL Book Library through your web browser.
* Users can add books to reading list, and explore authors and their works.
* The GraphQL API allows flexible querying to retrieve specific data.

## Contributing
Contributions to this project are welcome. Please follow the guidelines in the respective README files in the client and server directories for contribution instructions.

## Live Demo
[Live Demo](https://graphql-book-library.netlify.app)
