import React from "react";
import "./Auth.css";

const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit} autoComplete="off" className="auth-form">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        {!isLogin ? (
          <div>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                id="first-name-input"
                value={user.firstName}
                onChange={onChange}
                name="firstName"
                placeholder="First name"
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last-name-input"
                value={user.lastName}
                onChange={onChange}
                name="lastName"
                placeholder="Last name"
                required
              />
            </div>
          </div>
        ) : null}
        <div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="email-input"
              value={user.email}
              onChange={onChange}
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password-input"
              value={user.password}
              onChange={onChange}
              name="password"
              placeholder="Enter your password"
              min="0"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              {isLogin ? "Login" : "Register"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;