const initialValues = {
  searchText: "",
};

export default function reducer(state = initialValues, action) {
  switch (action.type) {
    case "SEARCH_FILTER":
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
}
