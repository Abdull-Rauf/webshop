const initState = {
  selectedCategory: ""
}
const categorySelectorReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "CHANGE_CATEGORY":
      return {
        ...state,
        selectedCategory: payload
      }

    default:
      return state;
  }
}

export default categorySelectorReducer;