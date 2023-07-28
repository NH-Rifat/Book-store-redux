/* eslint-disable no-unused-vars */
import { Provider } from "react-redux";
import BookLists from "./components/BookLists";
import Navbar from "./components/Navbar";
import store from "./redux/store";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Provider store={store}>
      <Navbar search={search} setSearch={search} handleSearch={handleSearch} />
      <BookLists search={search} setSearch={search} />
    </Provider>
  );
}

export default App;
