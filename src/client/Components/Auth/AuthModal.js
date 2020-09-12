import React, { useState } from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import AuthTabs from "./AuthTabs/AuthTabs";
import { CancelIcon } from "./AuthModalCss";
import { useDispatch, useSelector } from "react-redux";
import {
  changeIsLogInOpen,
  changeIsSignUpOpen,
  changeIsModalOpen,
} from "../../store/actions/AuthModalActions";
import { changeLoggedIn, logUserIn } from "../../store/actions/GeneralActions";
import { signUpFormChecker, logInFormChecker } from "./AuthHelper";
import { Post } from "../../Functions/Functions";

const AuthModal = ({ onClose }) => {
  const [userInfo, setUserInfo] = useState({});
  const [formError, setFormError] = useState({});
  const [errorMessageFromServer, setErrorMessageFromServer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const submitHandler = async (e, type) => {
    e.preventDefault();

    let errors =
      type === "login"
        ? logInFormChecker(userInfo)
        : signUpFormChecker(userInfo);

    if (errors.errorExists) {
      setFormError(errors);
    } else {
      setIsLoading(true);
      let { user, token, error } = await Post(
        `${process.env.SIT_API_URL}/api/${type}`,
        userInfo
      );
      if (user && token) {
        localStorage.setItem("jwt-token", data.token);
        dispatch(logUserIn(data.user));
        dispatch(changeLoggedIn(true));
        dispatch(changeIsModalOpen(false));
      } else {
        setErrorMessageFromServer(data.error);
        setUserInfo({});
      }
    }
  };

  const onChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.getAttribute("name")]: e.target.value,
    });
  };

  const changeTab = (e) => {
    e.target.getAttribute("name") === "login"
      ? dispatch(changeIsLogInOpen(true))
      : dispatch(changeIsSignUpOpen(true));
    setFormError({});
    setUserInfo({});
    setErrorMessageFromServer(null);
  };

  return (
    <div className="form-wrap">
      <CancelIcon onClick={onClose} className="fas fa-times fa-2x" />
      <AuthTabs
        changeTab={changeTab}
        errorMessageFromServer={errorMessageFromServer}
      />
      {state.modalState.isLogInOpen ? (
        <Login
          onChange={onChange}
          submitHandler={submitHandler}
          formError={formError}
          isLoading={isLoading}
        />
      ) : (
        <SignUp
          onChange={onChange}
          submitHandler={submitHandler}
          formError={formError}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default AuthModal;
