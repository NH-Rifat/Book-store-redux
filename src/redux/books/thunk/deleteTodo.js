/* eslint-disable no-unused-vars */
// import { bookDeleted } from "../actions";

const deleteTodo = (bookId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "DELETE",
    });

    // dispatch(bookDeleted(bookId));
  };
};

export default deleteTodo;
