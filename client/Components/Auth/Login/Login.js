import React, { useState } from "react";
import "../AuthModal.css";

const Login = ({ onChange, submitHandler, formError, isLoading }) => {
    return isLoading ? (
        <div className="spinner"></div>
    ) : (
        <div id="login-tab-content">
            <form
                className="login-form"
                onSubmit={(e) => submitHandler(e, "login")}
            >
                {formError.email ? (
                    <div className="error-message">{formError.email}</div>
                ) : null}
                <input
                    type="text"
                    className={`input ${formError.email ? "error" : ""}`}
                    id={formError.email ? "error" : ""}
                    name="email"
                    placeholder="Email"
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
                <p>
                    <span>Forget your password?</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
