import { Navigate, Outlet } from "react-router-dom";
import Parse from "parse";
import { checkUser } from "../Components/Auth/AuthService"
import Header from "../Components/Header/Header"

const ProtectedRoute = () => {
  const currentUser = checkUser(); // Check if user is logged in
  //console.log(currentUser);
  return currentUser ? (
    <>
      <Header/>
      <Outlet />
    </>
  ) : (<Navigate to="/auth/login" />);
};

export default ProtectedRoute;