import React from "react";

const AuthForm = ({ user, isLogin, onChange, onSubmit, onForgotPassword, onSwitchForm }) => {
  // blue pink gradient 
  const gradientStyle = {
    background: "linear-gradient(to right, #3498db, #ff69b4)"
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={gradientStyle}>
      <div className="card shadow p-4" style={{ width: "400px", borderRadius: "8px" }}>
        
        <div className="text-end">
          <button className="btn-close" aria-label="Close"></button>
        </div>
        
       
        <h1 className="text-center mb-4" style={{ fontSize: "28px", fontWeight: "bold" }}>
          {isLogin ? "Login Form" : "Register Form"}
        </h1>
        
        <form onSubmit={onSubmit} autoComplete="off">
        
          {!isLogin && (
            <>
              <div className="mb-3">
                <label className="form-label text-muted">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="first-name-input"
                  value={user.firstName}
                  onChange={onChange}
                  name="firstName"
                  required
                  style={{ padding: "10px", borderColor: "#ddd" }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-muted">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last-name-input"
                  value={user.lastName}
                  onChange={onChange}
                  name="lastName"
                  required
                  style={{ padding: "10px", borderColor: "#ddd" }}
                />
              </div>
            </>
          )}
          

          <div className="mb-3">
            <label className="form-label text-muted">Email or Phone</label>
            <input
              type="email"
              className="form-control"
              id="email-input"
              value={user.email}
              onChange={onChange}
              name="email"
              required
              style={{ padding: "10px", borderColor: "#ddd" }}
            />
          </div>
          
          {/* Password field */}
          <div className="mb-3">
            <label className="form-label text-muted">Password</label>
            <input
              type="password"
              className="form-control"
              id="password-input"
              value={user.password}
              onChange={onChange}
              name="password"
              required
              style={{ padding: "10px", borderColor: "#ddd" }}
            />
          </div>
          
      
          {isLogin && (
            <div className="text-end mb-3">
              <a 
                href="#" 
                onClick={onForgotPassword} 
                style={{ color: "#3498db", textDecoration: "none", fontSize: "14px" }}
              >
                Forgot Password?
              </a>
            </div>
          )}
          
       
          <div className="mb-4">
            <button 
              type="submit" 
              className="btn w-100 text-white"
              style={{ 
                ...gradientStyle, 
                padding: "10px", 
                fontSize: "16px",
                border: "none",
                borderRadius: "4px"
              }}
            >
              {isLogin ? "LOGIN" : "REGISTER"}
            </button>
          </div>
          

          <div className="text-center">
            <span className="text-muted">
              {isLogin ? "Not a member? " : "Already a member? "}
            </span>
            <a 
              href="#" 
              onClick={onSwitchForm}
              style={{ color: "#3498db", textDecoration: "none" }}
            >
              {isLogin ? "Signup now" : "Login now"}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;