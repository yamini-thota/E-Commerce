import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img
            src="https://lms.achieversit.com/assets/images/logo.png"
            alt="logo"
          />
          <div className="navbar justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item" aria-current="page">
                <Link className="nav-link active" to='./Shop'>
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/AboutUs'>
                  About Us
                </Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link active"  to="/Cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/Login'>
                  <i className="fa-solid fa-user"></i>
                </Link>
              </li>
            </ul>
         
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
