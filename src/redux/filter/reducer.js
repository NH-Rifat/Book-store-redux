const initialState = {
  status: "ALL",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_STATUS":
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

export default reducer;
