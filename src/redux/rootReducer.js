import { combineReducers } from "redux";
import bookReducer from "./books/reducer";
import filterReducer from "./filter/reducer";
import searchFilterReducer from "./search/reducer";
const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
  search: searchFilterReducer,
});

export default rootReducer;
