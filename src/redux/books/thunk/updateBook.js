/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import { bookUpdated } from "../actions";

const updateBook = (bookId, updatedBook) => {
  const { name, author, thumbnail, price, rating, featured } = updatedBook;
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...updatedBook,
        name: name,
        author: author,
        thumbnail: thumbnail,
        price: price,
        rating: rating,
        featured: featured,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const book = await response.json();
    console.log({ book }, "successfully updated");
    // dispatch(bookUpdated(bookId, book));
  };
};

export default updateBook;
