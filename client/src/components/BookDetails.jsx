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
      <div>
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>
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
