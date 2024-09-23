import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
const location = useLocation();

if (location.pathname === "/users/login" || location.pathname === "/students/register"){
  return null;
}

return (
  <footer className="footer-container">
    <div className="footer-left">
      <ul className="footer-links">
        <li>© 2024</li>
        <li>
          <Link to="/about" className="footer-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="footer-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
    <div className="footer-right">
      <a
        href="https://github.com/iperez08/EnrollMate_back_end"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaGithub />
      </a>
      <a
        href="https://github.com/Obamg3017/EnrollMate-Front-End"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaGithub />
      </a>
    </div>
  </footer>
);
};
