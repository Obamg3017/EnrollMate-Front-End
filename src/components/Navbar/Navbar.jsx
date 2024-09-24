// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "./navbar.css";
// import { FaSearch } from "react-icons/fa"; // Make sure to install react-icons if you haven't

// export const Navbar = ({ student, setQuery }) => {
//   const [input, setInput] = useState("");
//   const location = useLocation();
//   const pathname = location.pathname;

//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     setInput(event.target.value);
//   };

//   const handleClick = () => {
//     setQuery(input);
//     navigate("/courses");
//   };

  
//   const getNavClassName = () => {
//     if (pathname === "/") {
//       return "visitor-nav"; // Home - transparent background
//     } else if (pathname === "/students/dashboard") {
//       return ""; // Dashboard - white background
//     }
//     return "";
//   };
//   return (
//     <nav className={getNavClassName()}>
//       {pathname === "/" && (
//         <div className="nav-right signin-button">
//           <Link to="/users/login">Sign In</Link>
//         </div>
//       )}

  
//       {pathname !== "/" &&
//         pathname !== "/users/login" &&
//         pathname !== "/students/register" && (
//           <div className="dashboard-nav">
//             {pathname === "/students/dashboard" ? (
//               <img src="/EM-SD-logo.png" alt="logo" className="logo" />
//             ) : (
//               <img src="/EM.png" alt="logo" className="logo" />
//             )}

//             {pathname === "/courses" ? (
//               <div className="search-container">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="searchBar"
//                   onChange={handleChange}
//                 />
//                 <FaSearch onClick={handleClick} className="search-icon" />
//               </div>
//             ) : (
//               <div></div>
//             )}
//             {student ? (
//               <div className="right-nav-buttons">
//                 <Link to="/students/dashboard">Student Dashboard</Link>
//                 <Link to='/logout'>Sign Out</Link>
//               </div>
//             ) : (
//               <div className="nav-right signin-button">
//                 <Link to="/users/login">Sign In</Link>
//               </div>
//             )}
//           </div>
//         )}
//     </nav>
//   );
// };

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import { FaSearch } from "react-icons/fa"; // Make sure to install react-icons if you haven't

export const Navbar = ({ student, setQuery }) => {
  const [input, setInput] = useState(""); // Initialize input as an empty string

  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  // Handles input change in the search bar
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // When search button is clicked, update the query and navigate to the courses page
  const handleClick = () => {
    setQuery(input); // Set the search query to the input value
    navigate("/courses"); // Navigate to the courses page
    setInput(""); // Clear the search input after navigating
  };

  // Get the class name based on the current pathname
  const getNavClassName = () => {
    if (pathname === "/") {
      return "visitor-nav"; // Home - transparent background
    } else if (pathname === "/students/dashboard") {
      return ""; // Dashboard - white background
    }
    return "";
  };

  // Determine whether to show the search bar
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
      {/* Show "Sign In" button only on the home page */}
      {pathname === "/" && (
        <div className="nav-right signin-button">
          <Link to="/users/login">Sign In</Link>
        </div>
      )}

      {/* Show navbar with search bar and navigation links on other pages */}
      {pathname !== "/" &&
        pathname !== "/users/login" &&
        pathname !== "/students/register" && (
          <div className="dashboard-nav">
            {/* Conditionally render the logo based on the page */}
            {pathname === "/students/dashboard" ? (
              <img src="/EM-SD-logo.png" alt="logo" className="logo" />
            ) : (
              <img src="/EM.png" alt="logo" className="logo" />
            )}

            {/* Conditionally show the search bar only on allowed pages */}
            {showSearchBar && (
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search courses by name, department, or instructor..."
                  className="searchBar"
                  value={input} // Input is controlled
                  onChange={handleChange} // Update input value
                />
                <FaSearch onClick={handleClick} className="search-icon" />
              </div>
            )}

            {/* Conditionally render student-related links */}
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

