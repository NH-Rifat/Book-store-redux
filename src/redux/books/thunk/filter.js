import { booksLoaded } from "../actions";

const filterByStatus = (status) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books");
    const books = await response.json();
    if (status === "ALL") {
      dispatch(booksLoaded(books));
    } else {
      dispatch(booksLoaded(books.filter((item) => item.featured === true)));
    }
  };
};

export default filterByStatus;
