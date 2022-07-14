import React, { useState } from "react";
import { Link  } from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./navbar.css"


const Navbar = () => {
  
  const [activePage, setActivePage] = useState(window.location.pathname)
  const [collapse, setCollapse] = useState(false)

  const handlePageChange = (page) => {
    setActivePage(page)
  }

  const handleCollapse = () => {
    console.log("collapse", collapse)
    setCollapse(!collapse)
  }

  return (
    // <!-- Navbar -->
    <nav className="navbar navbar-expand-md navbar-dark p-0 bg-dark" >
      {/* <!-- Container wrapper --> */} 
      <div className="container-fluid custom-nav">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleCollapse}
        >
          <i className="fas fa-bars"></i>
        </button>
          {/* <!-- Navbar brand --> */}
          <Link className="navbar-brand mt-md-0 p-2" to="/" onClick={() => handlePageChange("/home")}>
            Henry Weigand
          </Link>
        {/* <!-- Collapsible wrapper --> */}
        <div className={(collapse) ? "navbar-collapse align-items-center pb-3" : "collapse navbar-collapse align-items-center py-2"} id="navbarSupportedContent">
          {/* <!-- Left links --> */}
          <ul className="navbar-nav me-auto mb-md-0 mb-1">
            <li className="nav-item">
              <Link className={(activePage==="/home") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/" onClick={() => handlePageChange("/home")}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={(activePage==="/about") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/about" onClick={() => handlePageChange("/about")}>About</Link>
            </li>
            <li className="nav-item">
              <Link className={(activePage==="/projects") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/projects" onClick={() => handlePageChange("/projects")}>Projects</Link>
            </li>
          </ul>
          {/* <!-- Left links --> */}
          {/* <!-- Rght links --> */}
          <ul className="navbar-nav mb-md-0 py-2 justify-content-end d-inline" style={{fontSize: "18px"}}>
              <li className="d-inline me-3 btn btn-custom" style={{backgroundColor: "#0077b5"}}>
                <a className="text-light" href="https://www.linkedin.com/in/henryweigand/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
              </li>
              <li className="d-inline me-3 btn btn-custom" style={{backgroundColor: "black"}}>
                <a className="text-light" href="https://github.com/hcweigand10" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
              </li>
              <li className="d-inline me-3 btn btn-custom" style={{backgroundColor: "red"}}>
                <a className="text-light" href="mailto:henryweigand10@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>
              </li>
          </ul>
          {/* <!-- Rght links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}

      </div>
    </nav>

  );
}

export default Navbar;