/* eslint-disable no-unused-vars */
import { Provider } from "react-redux";
import BookLists from "./components/BookLists";
import Navbar from "./components/Navbar";
import store from "./redux/store";
import { useState } from "react";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <BookLists />
    </Provider>
  );
}

export default App;
