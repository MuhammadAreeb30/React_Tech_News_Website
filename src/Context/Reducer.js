const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isLoading: false,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((curElem) => {
          return curElem.objectID !== action.payload;
        }),
      };
    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      };
    case "PREV_PAGE":
      let pageNum = state.page - 1;
      if (pageNum <= 0) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum,
      };
    case "NEXT_PAGE":
      let pageNumInc = state.page + 1;
      if (pageNumInc >= state.nbPages) {
        pageNumInc = 1;
      }
      return {
        ...state,
        page: pageNumInc,
      };
    default:
  }

  return state;
};

export default reducer;
