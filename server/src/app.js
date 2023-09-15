const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const BookType = require("./schema/schema")


const app = express();

app.use("/graphql", graphqlHTTP({
     
}));

app.listen(5000, () => console.log("Server is running"));
