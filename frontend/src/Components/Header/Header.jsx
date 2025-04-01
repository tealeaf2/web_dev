import { Link } from "react-router-dom";
import { logOut } from "../Auth/AuthService";
import { useNavigate } from "react-router-dom";

// Placeholder navbar, make better next time with About, Scrapbook, etc
export default function Header() {
  const navigate = useNavigate();

  const onClickLogout = () => {
    logOut();
    navigate('/');
  }
  return (
    <>
      <div>
        Navbar:
        <Link to='/home'> Home</Link> - 
        <Link to='/trips'> Trips</Link> - 
        <Link to='/scrapbooks'> Scrapbooks</Link>
        <button onClick={onClickLogout}>Logout</button>
      </div> 
    </>
  )
}