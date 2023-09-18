import { gql } from "@apollo/client";

const getAuthors = gql`
  {
    authors {
      name
      age
      id
    }
  }
`;

const graphqlQueryBook = gql`
  {
    books {
      name
      id
      genre

      author {
        name
        age
      }
    }
  }
`;

const ADD_BOOK_MUTATION = gql`
  mutation add($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      id
      author {
        name
        age
        id
      }
    }
  }
`;

const bookQuery = gql`
  query ($id: ID!) {
    book(id: $id) {
      name
      genre
      id
      author {
        name
        age
        id
        books {
          name
          id
          genre
        }
      }
    }
  }
`;

export { getAuthors, graphqlQueryBook, bookQuery, ADD_BOOK_MUTATION };
