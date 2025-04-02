import React, { useEffect, useState } from "react";
import { checkUser, loginUser } from "./AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

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
        // TODO: redirect user to main app
        setAdd(false);
      });
    }
  }, [navigate, currentUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { name, value: newValue } = e.target;
    // console.log(newValue);

    setCurrentUser({
      ...currentUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("submitted: ", e.target);
    setAdd(true);
  };

  const onClickRegister = () => {
    navigate("/auth/register")
  }

  return (
    <>
      <AuthForm
        user={currentUser}
        isLogin={true}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
      <div className="auth-switch">
        <button onClick={onClickRegister}>
          Not registered? Create an account
        </button>
      </div>
    </>
  );
};

export default AuthLogin;
