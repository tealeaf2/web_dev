import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";

// Make AuthModule be the gate if you need to first login or directly routes you to homepage if already logged in
const AuthModule = () => {
  const navigate = useNavigate();

  if (checkUser()) {
    navigate("/home");
  } else {
    navigate("/auth/login");
  }

  return (
    <>
    </>
  );
};

export default AuthModule;
