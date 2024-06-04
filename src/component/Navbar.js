import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
      
      <div className="container-fluid">
        <Link className="navbar-brand" aria-current="page" to="/TextEditBox.js" >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active"   to="/TextEditBox.js">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/About.js">
              {props.about}
              </Link>
            </li>
          </ul>
        </div>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
   onClick={props.mod} style={{cursor : "pointer"}} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.md} Mode</label>
</div>

    </nav>
  );
}
Navbar.propTypes = {
  title : PropTypes.string,
  about : PropTypes.string,
};
Navbar.defaultProps ={
  title : "dont forget to set title",
  about : "About",
};