const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "IS_MODAL_OPEN":
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case "USER":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGGED_IN":
      return {
        ...state,
        loggedIn: action.payload,
      };

    case "GENERAL_BUNDLE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
