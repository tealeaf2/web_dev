// Home page for explanation about the website and whatnot

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Base() {
  // State to track whether the menu is expanded or collapsed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // blue to pink gradient
  const gradientStyle = {
    background: "linear-gradient(to right, #3498db, #ff69b4)"
  };

   return (
    <div className="container-fluid p-0">
      <div className="position-relative" style={{ height: isMenuOpen ? "auto" : "70vh", minHeight: "70vh", ...gradientStyle }}>
        <div className={`w-100 ${isMenuOpen ? 'position-relative' : 'position-absolute top-0 start-0'}`}>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <a className="navbar-brand fw-bold" href="#">digibooks</a>
              <button 
                className="navbar-toggler" 
                type="button" 
                onClick={toggleMenu}
                aria-controls="navbarNav" 
                aria-expanded={isMenuOpen} 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav ms-auto text-end">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#features">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonials">Comments</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/auth/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="btn btn-light rounded-pill px-4" to="/auth/register">Sign Up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Content pushed down when menu is open */}
        <div className={`container ${isMenuOpen ? 'pt-5 mt-4' : 'h-100'} d-flex align-items-center`}>
          <div className="row">
            <div className="col-lg-6 text-white">
              <h1 className="display-4 fw-bold mb-4">Create. Capture. Connect.</h1>
              <p className="lead mb-4">digibooks is your space to bring memories to life — digitally. Whether you're crafting a family album, documenting a special trip, or designing a personalized storybook, our easy-to-use platform helps you turn your creativity into beautifully designed digital scrapbooks.</p>
              <div className="d-flex gap-3 mb-5">
                <Link to="/auth/register" className="btn btn-light rounded-pill px-4 py-2 ">Get Started</Link>
                <a href="#features" className="btn btn-outline-light rounded-pill px-4 py-2">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

  

      

      <div className="container py-5" id="features">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Why Choose digibooks?</h2>
          <p className="lead text-muted">Our platform is designed to make digital storytelling simple, beautiful, and deeply personal.</p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#3498db" className="bi bi-back" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                  </svg>
                </div>
                <h3 className="h4 mb-3"> Create Stunning Scrapbooks</h3>
                <p className="text-muted mb-0">Choose from a variety of templates, fonts, stickers, and backgrounds to design your perfect digital scrapbook — no design experience needed.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ff69b4" className="bi bi-card-image" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </div>
                <h3 className="h4 mb-3">Capture Moments that Matter</h3>
                <p className="text-muted mb-0">Upload photos, write captions, add custom designs, and organize your memories exactly how you want them. Every page is a canvas for your story.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#3498db" className="bi bi-chat-right-heart" viewBox="0 0 16 16">
                    <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                    <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
                  </svg>
                </div>
                <h3 className="h4 mb-3">Connect Through Stories</h3>
                <p className="text-muted mb-0">Share your digibooks with friends, family, or the entire digibooks community. Explore scrapbooks made by others, leave comments, and be inspired by stories from around the world. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="py-5" id="testimonials" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">What Our Users Say</h2>
            <p className="lead text-muted">Don't just take our word for it - hear from our satisfied users.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                        <span className="fw-bold">JS</span>
                      </div>
                      <div className="ms-3">
                        <h5 className="mb-0">Jane S.</h5>
                        <small className="text-muted">Graphic Designer</small>
                      </div>
                    </div>
                    <div className="text-warning">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-muted mb-0">“digibooks helped me preserve my travel memories in the most beautiful way. I shared my scrapbook with friends and they loved flipping through each page!”</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle text-white d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px", backgroundColor: "#ff69b4" }}>
                        <span className="fw-bold">RJ</span>
                      </div>
                      <div className="ms-3">
                        <h5 className="mb-0">Robert J.</h5>
                        <small className="text-muted">Freelancer</small>
                      </div>
                    </div>
                    <div className="text-warning">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-muted mb-0">“I’ve connected with people from around the world just by sharing my scrapbooks. The comment feature makes it feel like a creative community.”</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                        <span className="fw-bold">AL</span>
                      </div>
                      <div className="ms-3">
                        <h5 className="mb-0">Amy L.</h5>
                        <small className="text-muted">Teacher</small>
                      </div>
                    </div>
                    <div className="text-warning">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-muted mb-0">“As a teacher, I use DigiBooks to create digital yearbooks for my class. The kids love it, and parents appreciate the memories.”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5" style={gradientStyle}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center text-white">
              <h2 className="display-5 fw-bold mb-4">Ready to Get Started?</h2>
              <p className="lead mb-4">Join thousands of users who have used digibooks to preserve those timeless memories.</p>
              <Link to="/auth/register" className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold">
                Sign Up Now - It's Free!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="fw-bold mb-3">digibooks</h5>
            </div>
            <div className="col-md-2 mb-4 mb-md-0">
              <h6 className="fw-bold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">About</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Careers</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Blog</a></li>
              </ul>
            </div>
            <div className="col-md-2 mb-4 mb-md-0">
              <h6 className="fw-bold mb-3">Resources</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Help Center</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Guides</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">API Docs</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className="fw-bold mb-3">Stay Connected</h6>
              <p className="text-muted mb-3">Subscribe to our newsletter for updates and tips.</p>

            </div>
          </div>
          <hr className="my-4" />
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="text-muted mb-3 mb-md-0">© 2025 digiboooks. All rights reserved.</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-muted text-decoration-none">Terms</a>
              <a href="#" className="text-muted text-decoration-none">Privacy</a>
              <a href="#" className="text-muted text-decoration-none">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

