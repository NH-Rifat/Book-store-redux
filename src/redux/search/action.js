export const searchFilter = (searchText) => {
  return {
    type: "SEARCH_FILTER",
    payload: searchText,
  };
};
