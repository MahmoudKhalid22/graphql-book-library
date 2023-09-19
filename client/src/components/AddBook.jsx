import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  getAuthors,
  ADD_BOOK_MUTATION,
  graphqlQueryBook,
} from "../queries/queries";

function AddBook() {
  const [authorData, setAuthorData] = useState({
    name: "",
    genre: "",
    authorId: "",
  });
  const [formShow, setFormShow] = useState(false);

  const { data } = useQuery(getAuthors);
  const [addBook] = useMutation(ADD_BOOK_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBook({
        variables: {
          name: authorData.name,
          genre: authorData.genre,
          authorId: authorData.authorId,
        },
        refetchQueries: [{ query: graphqlQueryBook }],
      });
      setAuthorData({
        ...authorData,
        name: "",
        genre: "",
        authorId: "",
      });
      setFormShow(false);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={formShow ? "active" : ""}>
        <div className="form-container">
          <div className="field">
            <label htmlFor="bookname">Book name:</label>
            <input
              id="bookname"
              type="text"
              value={authorData.name}
              onChange={(e) =>
                setAuthorData({ ...authorData, name: e.target.value })
              }
            />
          </div>
          <div className="field">
            <label htmlFor="genre">Genre:</label>
            <input
              id="genre"
              value={authorData.genre}
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
        </div>
        <button type="submit">+</button>
      </form>
      <button className="btn-show" onClick={() => setFormShow((prev) => !prev)}>
        +
      </button>
    </div>
  );
}

export default AddBook;
