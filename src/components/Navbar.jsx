import React from "react";
// import logo from "../assets/cool-t-logo2.png";
import logo from "../../public/cool-t-favicon.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid align-items-center">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            {" "}
            {/* Added d-flex and align-items-center */}
            <img
              src={logo}
              alt="Logo"
              style={{ maxHeight: "50px" }}
              className="d-inline-block align-text-top me-2" // added me-2 for a little spacing between logo and text
            />
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.link1}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.link2}
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==="light"? "dark" : "light"}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {`Enable ${props.mode==="light"? "Dark" : "Light"} Mode`}
              </label>
            </div>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
};

Navbar.defaultProps = {
  title: "My Lovely Title",
  link1: "First Link",
  link2: "Second Link",
};