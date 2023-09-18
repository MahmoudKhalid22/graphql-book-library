import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { graphqlQueryBook } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList() {
  const [bookId, setBookId] = useState(null);

  const { loading, error, data } = useQuery(graphqlQueryBook);
  if (loading) return <p className="loading">Loading...</p>;
  if (error) {
    return <p className="error">Error : {error.message}</p>;
  }

  return (
    <>
      {data?.books.map((book) => (
        <li key={book.id} onClick={(e) => setBookId(book.id)}>
          {book.name}
        </li>
      ))}
      {console.log(bookId)}
      <BookDetails bookId={bookId} />
    </>
  );
}

export default BookList;
