import React from "react";
import { useQuery } from "@apollo/client";
import { bookQuery } from "../queries/queries";

function BookDetails({ bookId }) {
  const { data, loading, error } = useQuery(bookQuery, {
    variables: { id: bookId },
  });
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="">No Selected Books.</p>;

  const { book } = data;
  if (book) {
    return (
      <div className="book-details">
        <h2>Name: {book.name}</h2>
        <p>Genre: {book.genre}</p>
        <p>Author: {book.author.name}</p>
        <p>
          <p>All books for the author</p>
          {book.author.books?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </p>
      </div>
    );
  } else {
    return <div>No selected Books.</div>;
  }
}

export default BookDetails;
