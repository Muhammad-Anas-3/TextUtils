import React from "react";
// our first component in react.js
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand mx-2" href="#">
            {props.title}
          </a>
          {/* below switch is for light and dark mode */} 
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="first"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${props.mode === "light" ? "dark" : "light"
                }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>


        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  // we declare that proptypes is only string not number or either data types
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "TextUtils",
  aboutText: "About",
};
