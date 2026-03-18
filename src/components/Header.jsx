import React from "react";
import { Link } from "react-router-dom";


/*
Header Component
- Displays the logo, app name, and navigation links
- Hides Login and Sign Up links if the user is logged in
- Includes hamburger menu for small screens (Bootstrap)
*/

function Header({ isLoggedIn }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">

        {/* LOGO + APP NAME */}
        <Link className="navbar-brand d-flex align-items-center" to="/home">

          {/* LOGO IMAGE */}
          <img
            src="/examify.jpeg"   /* React loads from public folder */
            alt="Examify Logo"
            style={{ height: "60px", marginRight: "10px" }}
          />

          <strong></strong>

        </Link>


        {/* HAMBURGER MENU (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* NAVIGATION LINKS */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {/* Show Login + SignUp ONLY if user is NOT logged in */}
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/create-account">
                    Sign Up
                  </Link>
                </li>
              </>
            )}

            {/* Always visible links */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Header;