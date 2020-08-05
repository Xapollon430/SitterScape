import React from "react";

const SignUp = ({ onChange, submitHandler, formError, isLoading }) => {
  return isLoading ? (
    <div className="spinner"></div>
  ) : (
    <div className="tabs-content">
      <div id="signup-tab-content" className="active">
        <form
          className="signup-form"
          onSubmit={(e) => submitHandler(e, "sign-up")}
        >
          {formError.email ? (
            <div className="error-message">{formError.email}</div>
          ) : null}
          <input
            className={`input ${formError.email ? "error" : ""}`}
            name="email"
            placeholder="Email"
            onChange={onChange}
          />
          {formError.username ? (
            <div className="error-message">{formError.username}</div>
          ) : null}
          <input
            type="text"
            className={`input ${formError.username ? "error" : ""}`}
            name="username"
            placeholder="Username"
            onChange={onChange}
          />
          {formError.password ? (
            <div className="error-message">{formError.password}</div>
          ) : null}
          <input
            type="password"
            className={`input ${formError.password ? "error" : ""}`}
            name="password"
            placeholder="Password"
            onChange={onChange}
          />

          <input type="submit" className="button" />
        </form>
        <div className="help-text">
          <p>By signing up, you agree to our</p>
          <p>
            <span>Terms of service</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
