import React from "react";
import { Link } from "react-router-dom";

// Make AuthModule be the gate if you need to first login or directly routes you to homepage if already logged in
const AuthModule = () => {
  return (
    <div>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default AuthModule;
