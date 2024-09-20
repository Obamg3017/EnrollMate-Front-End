import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer>
      <ul>
        <li>Copyright2024</li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div>
        <a
          href="https://github.com/Obamg3017"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="http://www.linkedin.com/in/olorunfemi-bamgbose"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href=""></a>
        <a href=""></a>
      </div>
    </footer>
  );
};


