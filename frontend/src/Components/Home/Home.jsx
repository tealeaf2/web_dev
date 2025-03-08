// Home page for explanation about the website and whatnot
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
    <div>
      <h1>Welcome to Scrapbook Explorer</h1>
      <p>Discover and share amazing travel experiences through scrapbooks!</p>
      <button onClick={() => navigate("/scrapbooks")}>Explore Scrapbooks</button>

      {/* Featured Scrapbooks Section (Still deciding if want, maybe about better) */}
      {/* No pictures for now */}
      <h2>Featured Scrapbooks</h2>
      <ul>
        <li>
          <h3>Beach Adventure</h3>
          <p>A breathtaking vacation by the sea.</p>
        </li>
        <li>
          <h3>Mountain Escape</h3>
          <p>Hiking through majestic landscapes.</p>
        </li>
        <li>
          <h3>City Exploration</h3>
          <p>Discovering the beauty of urban life.</p>
        </li>
      </ul>
    </div>
    </>
  )
}