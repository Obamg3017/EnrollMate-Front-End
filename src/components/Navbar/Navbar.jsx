import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import { FaSearch } from "react-icons/fa"; // Make sure to install react-icons if you haven't

export const Navbar = ({ student, handleSignOut, setQuery }) => {
  const [input, setInput] = useState("");
  const location = useLocation();
  const pathname = location.pathname;

  const navigate = useNavigate();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setQuery(input);
    navigate("/courses");
  };

  console.log(pathname);
  const getNavClassName = () => {
    if (pathname === "/") {
      return "visitor-nav"; // Home - transparent background
    } else if (pathname === "/students/dashboard") {
      return ""; // Dashboard - white background
    }
    return "";
  };
  return (
    <nav className={getNavClassName()}>
      {pathname === "/" && (
        <div className="nav-right signin-button">
          <Link to="/users/login">Sign In</Link>
        </div>
      )}

  
      {pathname !== "/" &&
        pathname !== "/users/login" &&
        pathname !== "/students/register" && (
          <div className="dashboard-nav">
            {pathname === "/students/dashboard" ? (
              <img src="/EM-SD-logo.png" alt="logo" className="logo" />
            ) : (
              <img src="/EM.png" alt="logo" className="logo" />
            )}

            {pathname === "/courses" ? (
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="searchBar"
                  onChange={handleChange}
                />
                <FaSearch onClick={handleClick} className="search-icon" />
              </div>
            ) : (
              <div></div>
            )}
            {student ? (
              <div className="right-nav-buttons">
                <Link to="/students/dashboard">Student Dashboard</Link>
                <Link onClick={handleSignOut}>Sign Out</Link>
              </div>
            ) : (
              <div className="nav-right signin-button">
                <Link to="/users/login">Sign In</Link>
              </div>
            )}
          </div>
        )}
    </nav>
  );
};
