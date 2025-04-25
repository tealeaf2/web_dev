import { Link, NavLink } from "react-router-dom";
import { logOut } from "../Auth/AuthService";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const onClickLogout = () => {
    logOut();
    navigate('/');
  }

  return (
    <header style={{
      background: "linear-gradient(90deg, #3b82f6 0%, #ec4899 100%)",
      padding: "1rem 2rem",
      width: "100%",
      top: "0",
    }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/home" style={{
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textDecoration: "none"
        }}>
          digibooks
        </Link>
        
        <nav style={{display: "flex", gap: "1.5rem", alignItems: "center"}}>
          <NavLink 
            to='/home' 
            style={({isActive}) => ({
              color: "white",
              opacity: isActive ? "1" : "0.8",
              textDecoration: "none"
            })}
          >
            home
          </NavLink>
          <NavLink 
            to='/trips' 
            style={({isActive}) => ({
              color: "white",
              opacity: isActive ? "1" : "0.8",
              textDecoration: "none"
            })}
          >
            trips
          </NavLink>
          <NavLink 
            to='/scrapbooks' 
            style={({isActive}) => ({
              color: "white",
              opacity: isActive ? "1" : "0.8",
              textDecoration: "none"
            })}
          >
            scrapbooks
          </NavLink>
          <button 
            onClick={onClickLogout} 
            style={{
              color: "white",
              opacity: "0.8",
              background: "transparent",
              border: "none",
              padding: "0",
              cursor: "pointer"
            }}
            onMouseOver={(e) => e.target.style.opacity = "1"}
            onMouseOut={(e) => e.target.style.opacity = "0.8"}
          >
            logout
          </button>
        </nav>
      </div>
    </header>
  );
}