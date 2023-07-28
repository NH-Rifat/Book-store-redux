import {
  BOOKS_LOADED,
  BOOK_DELETED,
  BOOK_ADDED,
  BOOK_UPDATED,
  ALL_BOOK,
  FEATURED_BOOK,
} from "./actionTypes";

export const booksLoaded = (books) => {
  return {
    type: BOOKS_LOADED,
    payload: books,
  };
};

export const bookAdded = (book) => ({
  type: BOOK_ADDED,
  payload: book,
});

export const bookDeleted = (id) => ({
  type: BOOK_DELETED,
  payload: id,
});

export const bookUpdated = (id, book) => ({
  type: BOOK_UPDATED,
  payload: {
    id,
    book,
  },
});

export const allBook = () => ({
  type: ALL_BOOK,
});

export const featuredBook = () => ({
  type: FEATURED_BOOK,
});
