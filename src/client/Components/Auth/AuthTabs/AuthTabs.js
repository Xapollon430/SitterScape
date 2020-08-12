import React from "react";
import { useSelector } from "react-redux";

const AuthTabs = ({ changeTab, errorMessageFromServer }) => {
  let state = useSelector((state) => state);
  return (
    <div className="tabs-wrap">
      <div className="tabs">
        <h3 className="signup-tab">
          <span
            className={state.modalState.isSignUpOpen ? "active" : ""}
            onClick={changeTab}
          >
            Sign Up
          </span>
        </h3>
        <h3 className="login-tab">
          <span
            className={state.modalState.isLogInOpen ? "active" : ""}
            name="login"
            onClick={changeTab}
          >
            Login
          </span>
        </h3>
      </div>
      {errorMessageFromServer && (
        <div className="error-message padding-left">
          {errorMessageFromServer}
        </div>
      )}
    </div>
  );
};

export default AuthTabs;
