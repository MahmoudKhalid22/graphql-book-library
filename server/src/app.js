const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

// CONNECTING TO DB
mongoose.connect("mongodb://127.0.0.1:27017/book-library", {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => console.log("Connected to db"));

// USE SCHEMA AND GRAPHIQL TOOL
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(5000, () => console.log("Server is running"));
