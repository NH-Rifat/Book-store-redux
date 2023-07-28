/* eslint-disable no-unused-vars */
// import { bookAdded } from "../actions";

const addBook = (singleBook) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({
        ...singleBook,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const book = await response.json();
    // dispatch(bookAdded(book));
  };
};

export default addBook;
