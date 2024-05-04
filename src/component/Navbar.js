import React from "react";
import PropTypes from 'prop-types';
export default function Navbar(props) {
  
  
  /*const mod = ()=>{
    if(mode==='light'){
      console.log(mode);
      console.log(md);
      setMode('dark');
      
      setMd('Light');
    }else{
      console.log(mode);
      setMode('light');
      setMd('Dark');
    }
  }*/
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler collapsed"
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              {props.about}
              </a>
            </li>
          </ul>
        </div>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
   onClick={props.mod}/>
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