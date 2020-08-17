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
          {formError.name ? (
            <div className="error-message">{formError.name}</div>
          ) : null}
          <input
            type="text"
            className={`input ${formError.name ? "error" : ""}`}
            name="name"
            placeholder="Name"
            onChange={onChange}
          />
          {formError.surname ? (
            <div className="error-message">{formError.surname}</div>
          ) : null}
          <input
            type="text"
            className={`input ${formError.surname ? "error" : ""}`}
            name="surname"
            placeholder="Surname"
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
