/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import initialState from "./initialState";
import {
  BOOKS_LOADED,
  BOOK_DELETED,
  BOOK_ADDED,
  BOOK_UPDATED,
  ALL_BOOK,
  FEATURED_BOOK,
} from "./actionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_LOADED:
      return action.payload;

    case BOOK_ADDED:
      return [...state, action.payload];

    case BOOK_DELETED:
      return state.filter((book) => book.id !== action.payload);

    case BOOK_UPDATED:
      const { id, book } = action.payload;
      return state.map((singleBook) =>
        singleBook.id === id ? { ...book } : singleBook
      );

    default:
      return state;
  }
};

export default reducer;
