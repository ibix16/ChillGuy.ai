import React, { useEffect } from "react";
import "./LandingPage.css";
import { getSocket } from "../socket";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  useEffect(() => {
    getSocket();
    console.log("Get socket called ");
  }, []);
  
  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="logo">ChillGuy.ai</Link>
        <div className="nav-links">
          <a href="#">Resources</a>
          <Link to="/about">About</Link>
          <a href="#">Contact</a>
        </div>
        <div className="nav-buttons">
          <Link to="/signup" className="btn btn-outline">Sign in</Link>
          <Link to="/signup" className="btn btn-dark">Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">ChillGuy.ai</h1>
        <p className="hero-text">Calmness a call away</p>
        <div className="hero-buttons">
          <Link to="/about" className="btn btn-outline">Learn More</Link>
          <Link to="/signup" className="btn btn-dark">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;