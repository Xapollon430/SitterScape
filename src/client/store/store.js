import { useReducer, createContext } from "react";
import reducer from "./reducer";

const initialState = {
  user: null,
  loggedIn: false,
  isModalOpen: false,
  isLogInOpen: false,
  isSignUpOpen: false,
};

export const StoreContext = createContext();

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
