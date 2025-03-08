import { Link } from "react-router-dom";

// Placeholder navbar, make better next time with About, Scrapbook, etc
export default function Header() {
  return (
    <>
      <div>
        Navbar:
        <Link to='/'> Home</Link> - 
        <Link to='/trips'> Trips</Link> - 
        <Link to='/scrapbooks'> Scrapbooks</Link>
      </div> 
    </>
  )
}