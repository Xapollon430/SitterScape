import React, { useContext } from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import { CancelIcon, TabWrap, TabText, AuthWrap } from "./AuthModalCss";
import { StoreContext } from "../../store/store";
import { changeIsLogInOpen, changeIsSignUpOpen } from "../../store/actions";

const AuthModal = ({ onClose }) => {
  const [state, dispatch] = useContext(StoreContext); // {app}?

  const changeTab = (e) => {
    e.target.innerHTML == "Login"
      ? dispatch(changeIsLogInOpen(true))
      : dispatch(changeIsSignUpOpen(true));
  };

  return (
    <AuthWrap>
      <CancelIcon onClick={onClose} className="fas fa-times fa-2x" />
      <TabWrap onClick={changeTab}>
        <TabText selected={state.isSignUpOpen}>Sign Up</TabText>
        <TabText selected={state.isLogInOpen}>Login</TabText>
      </TabWrap>
      {state.isLogInOpen ? <Login /> : <SignUp />}
    </AuthWrap>
  );
};

export default AuthModal;
