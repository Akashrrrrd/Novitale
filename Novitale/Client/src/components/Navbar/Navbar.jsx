import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            Novitale
            <span className="logo-dot">.</span>
          </Link>
        </div>

        <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              <span className="link-text">Home</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/categories" className="navbar-link">
              <span className="link-text">Categories</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/local" className="navbar-link">
              <span className="link-text">Local News</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              <span className="link-text">About</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link contact-link">
              <span className="link-text">Contact</span>
            </Link>
          </li>
        </ul>

        <button
          className={`navbar-hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
