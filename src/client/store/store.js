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
  const value = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default Store;
