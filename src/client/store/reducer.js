const reducer = (state, action) => {
  switch (action.type) {
    case "IS_MODAL_OPEN":
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case "IS_LOG_IN_OPEN":
      return {
        ...state,
        isSignUpOpen: false,
        isLogInOpen: action.payload,
      };
    case "IS_SIGN_UP_OPEN":
      return {
        ...state,
        isLogInOpen: false,
        isSignUpOpen: action.payload,
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
