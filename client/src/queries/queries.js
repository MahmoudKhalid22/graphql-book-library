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

export { getAuthors, graphqlQueryBook };
