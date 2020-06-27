const initialReducerState = {
    isModalOpen: false,
    isLogInOpen: false,
    isSignUpOpen: false,
};

const AuthModalReducer = (state = initialReducerState, action) => {
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
        default:
            return state;
    }
};

export default AuthModalReducer;
