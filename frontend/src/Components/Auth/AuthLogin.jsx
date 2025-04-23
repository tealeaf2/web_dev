import React, { useEffect, useState } from "react";
import { checkUser, loginUser } from "./AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

const AuthLogin = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (checkUser()) {
      navigate("/home");
    }
  }, [navigate]);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (currentUser && add) {
      loginUser(currentUser).then((userLoggedIn) => {
        if (userLoggedIn) {
          navigate("/home");
        }
        setAdd(false);
      });
    }
  }, [navigate, currentUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;

    setCurrentUser({
      ...currentUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  const onSwitchForm = (e) => {
    e.preventDefault();
    navigate("/auth/register");
  };

  const onForgotPassword = (e) => {
    e.preventDefault();
    // Handle forgot password functionality
    alert("Forgot password functionality will be implemented soon!");
  };

  return (
    <AuthForm
      user={currentUser}
      isLogin={true}
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
      onSwitchForm={onSwitchForm}
      onForgotPassword={onForgotPassword}
    />
  );
};

export default AuthLogin;