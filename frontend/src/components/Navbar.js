/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Profile from "./Profile";
function Navbar() {
  return (
    <div className="container mt-2">
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
                    <a className="nav-link me-5" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-5" href="#">
                      Blogs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-5" href="#">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
        <span>Hi User!</span>
          {/* <button type="button" className="btn btn-dark">AI Bot</button> */}
          <Profile />
          
        </div>
      </div>
      </div>
    
  );
}

export default Navbar;
