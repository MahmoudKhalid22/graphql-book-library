const graphql = require("graphql");
// const _ = require("lodash");
const Book = require("../model/book");
const Author = require("../model/author");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLFloat,
  GraphQLID,
  GraphQLList,
} = graphql;

// const books = [
//   { name: "cat", genre: "animals", id: "1", authorId: "1a" },
//   { name: "dog", genre: "animals", id: "2", authorId: "2a" },
//   { name: "sights science", genre: "sights", id: "6", authorId: "2a" },
//   {
//     name: "اللغة العربية للأعاجم",
//     genre: "languages",
//     id: "7",
//     authorId: "3a",
//   },
//   { name: "bird", genre: "birds", id: "3", authorId: "3a" },
//   { name: "nodejs", genre: "Programming", id: "4", authorId: "1a" },
//   { name: "Data Structure", genre: "basics", id: "5", authorId: "1a" },
// ];
// const authors = [
//   { name: "jonas", age: "44", id: "1a" },
//   { name: "Maximellian", age: "49", id: "2a" },
//   { name: "Mahmoud", age: "66", id: "3a" },
// ];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        const author = Author.findById(parent.authorId);
        return author;
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLFloat },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // console.log(parent);
        return Author.findById(parent.id);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parents, args) {
        return Book.findById(args.id);
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parents, args) {
        // console.log(parents);
        return Author.findById(args.id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({});
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        const authors = Author.find({});
        return authors;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLFloat },
      },
      resolve(parent, args) {
        const author = new Author({
          name: args.name,
          age: args.age,
        });
        return author.save();
      },
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        authorId: { type: GraphQLID },
      },
      resolve(parent, args) {
        // console.log(args);
        const book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });
        return book.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
