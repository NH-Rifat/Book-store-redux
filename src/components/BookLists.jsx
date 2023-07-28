/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from "react-redux";
import BookForm from "./BookForm";
import SingleBook from "./SingleBook";
import Tabs from "./Tabs";
import { useEffect, useState } from "react";
import fetchBooks from "../redux/books/thunk/fetchBooks";

const BookLists = ({ search, setSearch }) => {
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);

  const disPatch = useDispatch();
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedBook, setUpdatedBook] = useState({});

  const filterByStatus = (book) => {
    const { status } = filter;
    if (status === "ALL") return true;
    if (status === "FEATURED") return book.featured;
    return false;
  };

  useEffect(() => {
    disPatch(fetchBooks());
  }, [disPatch]);

  const SearchFilter = (book) => {
    return book.name.toLowerCase().includes(search.toLowerCase());
  };

  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>
            <Tabs />
          </div>
          <div className="lws-bookContainer">
            {/* Single Book  */}
            {books
              ?.filter(SearchFilter)
              ?.filter(filterByStatus)
              ?.map((book, index) => (
                <SingleBook
                  key={index}
                  book={book}
                  setIsUpdating={setIsUpdating}
                  setUpdatedBook={setUpdatedBook}
                />
              ))}
          </div>
        </div>
        <div>
          <BookForm
            isUpdating={isUpdating}
            setIsUpdating={setIsUpdating}
            updatedBook={updatedBook}
          />
        </div>
      </div>
    </main>
  );
};

export default BookLists;
