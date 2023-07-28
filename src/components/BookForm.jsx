/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { bookAdded, bookUpdated } from "../redux/books/actions";
import { useDispatch } from "react-redux";
import fetchBooks from "../redux/books/thunk/fetchBooks";
import addBook from "../redux/books/thunk/addTodo";
import updateBook from "../redux/books/thunk/updateBook";

const BookForm = ({ isUpdating, setIsUpdating, updatedBook }) => {
  const disPatch = useDispatch();
  const {
    id: bookId,
    name: bookName,
    author: bookAuthor,
    thumbnail: bookThumbnail,
    price: bookPrice,
    rating: bookRating,
    featured: bookFeatured,
  } = updatedBook;

  const [bookInfo, setBookInfo] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: "",
  });

  useEffect(() => {
    if (isUpdating) {
      setBookInfo(updatedBook);
    }
  }, [isUpdating, updatedBook]);

  const { name, author, thumbnail, price, rating, featured } = bookInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newBook;

    isUpdating
      ? (newBook = {
          id: bookId,
          name,
          author,
          thumbnail,
          price,
          rating,
          featured,
        })
      : (newBook = {
          // generate unique id
          id: Number(new Date().getTime().toString()),
          name,
          author,
          thumbnail,
          price,
          rating,
          featured,
        });
    console.log("newBook", newBook);

    // clear form
    setBookInfo({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
    // dispatch action
    isUpdating
      ? disPatch(bookUpdated(bookId, newBook))
      : disPatch(bookAdded(newBook));

    // book added to the server after showing in the UI
    isUpdating === false ? disPatch(addBook(newBook)) : "";

    // update the book to the server after showing in the UI
    isUpdating ? disPatch(updateBook(bookId, newBook)) : "";

    setIsUpdating(false);
  };
  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={name}
            onChange={(e) => setBookInfo({ ...bookInfo, name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={author}
            onChange={(e) =>
              setBookInfo({ ...bookInfo, author: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={thumbnail}
            onChange={(e) =>
              setBookInfo({ ...bookInfo, thumbnail: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={price}
              onChange={(e) =>
                setBookInfo({ ...bookInfo, price: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={rating}
              onChange={(e) =>
                setBookInfo({ ...bookInfo, rating: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            value={featured}
            checked={featured}
            onChange={(e) =>
              setBookInfo({ ...bookInfo, featured: e.target.checked })
            }
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          {isUpdating ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
