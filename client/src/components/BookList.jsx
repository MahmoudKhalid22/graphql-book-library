import React from "react";
import { useQuery } from "@apollo/client";
import { graphqlQueryBook } from "../queries/queries";

function BookList() {
  const { loading, error, data } = useQuery(graphqlQueryBook);
  if (loading) return <p className="loading">Loading...</p>;
  if (error) {
    return <p className="error">Error : {error.message}</p>;
  }

  return (
    <>
      {data?.books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </>
  );
}

export default BookList;
