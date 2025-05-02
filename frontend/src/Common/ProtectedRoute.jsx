import { Navigate, Outlet } from "react-router-dom";
import Parse from "parse";
import { checkUser } from "../Components/Auth/AuthService"
import Header from "../Components/Header/Header"

const ProtectedRoute = ({header}) => {
  const currentUser = checkUser(); // Check if user is logged in
  console.log(currentUser)
  //console.log(currentUser);
  return currentUser ? (
    <>
      {header ? <Header/> : null}
      <Outlet />
    </>
  ) : (<Navigate to="/auth/login" />);
};

export default ProtectedRoute;