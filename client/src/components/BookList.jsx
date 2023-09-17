import React from "react";
import { useQuery, gql } from "@apollo/client";

function BookList() {
  const GET_LOCATIONS = gql`
    query GetLocations {
      books {
        name
        id
        genre
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {data?.books.map(({ id, name, genre }) => (
        <div key={id}>
          <h3>{name}</h3>
          <br />

          <p>{genre}</p>
          <br />
        </div>
      ))}
    </>
  );
}

export default BookList;
