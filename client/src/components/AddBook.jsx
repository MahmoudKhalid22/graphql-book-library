import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getAuthors } from "../queries/queries";

function AddBook() {
  const [authorData, setAuthorData] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const { data } = useQuery(getAuthors);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(authorData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="bookname">Book name:</label>
          <input
            id="bookname"
            type="text"
            onChange={(e) =>
              setAuthorData({ ...authorData, name: e.target.value })
            }
          />
        </div>
        <div className="field">
          <label htmlFor="genre">Genre:</label>
          <input
            id="genre"
            type="text"
            onChange={(e) =>
              setAuthorData({ ...authorData, genre: e.target.value })
            }
          />
        </div>
        <div className="field">
          <label htmlFor="author">Author</label>
          <select
            id="author"
            onChange={(e) =>
              setAuthorData({ ...authorData, authorId: e.target.value })
            }
          >
            <option>Select Author:</option>
            {data?.authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default AddBook;
