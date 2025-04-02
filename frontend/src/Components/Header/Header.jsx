import { Link, NavLink } from "react-router-dom";
import { logOut } from "../Auth/AuthService";
import { useNavigate } from "react-router-dom";
import "./Header.css";

// Placeholder navbar, make better next time with About, Scrapbook, etc
export default function Header() {
  const navigate = useNavigate();

  const onClickLogout = () => {
    logOut();
    navigate('/');
  }

  return (
    <header className="header">
      <Link to="/home" className="brand">
        digibooks
      </Link>
      <nav className="nav-links">
        <NavLink to='/home'>home</NavLink>
        <NavLink to='/trips'>trips</NavLink>
        <NavLink to='/scrapbooks'>scrapbooks</NavLink>
        <button onClick={onClickLogout} className="logout-btn">
          logout
        </button>
      </nav>
    </header>
  );
}