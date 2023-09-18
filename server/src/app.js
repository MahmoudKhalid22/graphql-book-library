const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const app = express();
const PORT = process.env.PORT;
// CONNECTING TO DB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => console.log("Connected to db"));

app.use(cors());
// USE SCHEMA AND GRAPHIQL TOOL
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log("Server is running"));
