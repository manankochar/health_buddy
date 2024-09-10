/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Profile from "./Profile";
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const user = localStorage.getItem('user')
  console.log(user)
  return (
    <div className="container-fluid m-3">
      <div className="row">
        <div className="col-4">
          <h1 className="fs-3 m-3 d-flex justify-content-start align-items-center">
            Health Buddy
          </h1>
        </div>
        <div className="col-4">
          <nav className="navbar navbar-expand-lg fs-5">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link me-5 nav-hover"
                      aria-current="page"
                      href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link me-5 nav-hover"
                      href="/blog">
                      Blogs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link me-5 nav-hover"
                      href="#">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link nav-hover"
                      href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center px-4">
          <span>Hi 
            {
              user && user!==undefined ? {}
            }User!</span>
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
