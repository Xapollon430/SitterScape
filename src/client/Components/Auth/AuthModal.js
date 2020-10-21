import React, { useState } from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import {
  CancelIcon,
  Spinner,
  TabWrap,
  TabText,
  Form,
  Input,
  SubmitButton,
} from "./AuthModalCss";
import { useDispatch, useSelector } from "react-redux";
import {
  changeIsLogInOpen,
  changeIsSignUpOpen,
} from "../../store/actions/AuthModalActions";
import { Post } from "../../Functions/Functions";

const AuthModal = ({ onClose }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // let { user, token, error } = await Post(
  //   `${process.env.SIT_API_URL}/api/${type}`,
  //   userInfo
  // );
  // if (user && token) {
  //   localStorage.setItem("jwt-token", data.token);
  //   dispatch(logUserIn(data.user));
  //   dispatch(changeLoggedIn(true));
  //   dispatch(changeIsModalOpen(false));
  // }

  const changeTab = (e) => {
    e.target.innerHTML == "Login"
      ? dispatch(changeIsLogInOpen(true))
      : dispatch(changeIsSignUpOpen(true));
  };

  return (
    <React.Fragment>
      <CancelIcon onClick={onClose} className="fas fa-times fa-2x" />
      <TabWrap onClick={changeTab}>
        <TabText>Sign Up</TabText>
        <TabText>Login</TabText>
      </TabWrap>
      {state.modalState.isLogInOpen ? <Login /> : <SignUp />}
    </React.Fragment>
  );
};

export default AuthModal;
