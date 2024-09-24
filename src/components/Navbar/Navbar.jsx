import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";

export const Navbar = ({ student, setQuery }) => {
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
    setInput("");
  };

  const getNavClassName = () => {
    if (pathname === "/") {
      return "visitor-nav";
    } else if (pathname === "/students/dashboard") {
      return "";
    }
    return "";
  };

  const showSearchBar = ![
    "/",
    "/users/login",
    "/students/register",
    "/students/dashboard",
    "/contact",
    "/about",
  ].includes(pathname);

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
            ) : pathname === "/student/enrollments" ? (
              <img
                src="/EM-Course-Enrollment.png"
                alt="logo"
                className="logo"
              />
            ) : pathname === "/courses" ? (
              <img src="/EM-Course-Catalog.png" alt="logo" className="logo" />
            ) : (
              <img src="/EM.png" alt="logo" className="logo" />
            )}

            {showSearchBar && (
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search courses by name, department, or instructor..."
                  className="searchBar"
                  value={input}
                  onChange={handleChange}
                />
                <FaSearch onClick={handleClick} className="search-icon" />
              </div>
            )}

            {student ? (
              <div className="right-nav-buttons">
                <Link to="/students/dashboard">Student Dashboard</Link>
                <Link to="/logout">Sign Out</Link>
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
