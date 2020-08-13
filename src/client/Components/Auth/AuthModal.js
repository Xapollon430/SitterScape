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
import { generalDispatchBundler } from "../../store/actions/GeneralActions";
import { signUpFormChecker, logInFormChecker } from "./AuthHelper";

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

    setFormError(errors);

    if (!errors.errorExists) {
      setIsLoading(true);

      let response = await fetch(`${process.env.SIT_API_URL}/api/${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      let data = await response.json();
      if (data.user && data.token) {
        dispatch(
          generalDispatchBundler({
            user: data.user,
            loggedIn: true,
          })
        );
        localStorage.setItem("jwt-token", data.token);
        dispatch(changeIsModalOpen(false));
      } else {
        setErrorMessageFromServer(data.message);
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
