import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ student, handleSignOut }) => {
  return (
    <nav>
      <div>
        <h1>EM</h1>
      </div>
      <div>
        {student ? (
          <>
            <Link to="/students/dashboard">Student Dashboard</Link>
            <span onClick={handleSignOut}>Sign Out</span>
          </>
        ) : (
          <Link to="/users/login">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

