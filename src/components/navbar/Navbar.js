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
    setCollapse(!collapse)
  }

  return (
    // <!-- Navbar -->
    <nav className="navbar navbar-expand-lg navbar-dark p-0 custom-nav">
      {/* <!-- Container wrapper --> */} 
      <div className="container-fluid">
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
          <Link className="navbar-brand mt-lg-0 p-2" to="/" onClick={() => handlePageChange("/home")}>
            Henry Weigand
          </Link>
        {/* <!-- Collapsible wrapper --> */}
        <div className={(collapse) ? "navbar-collapse" : "collapse navbar-collapse"} id="navbarSupportedContent">
          {/* <!-- Left links --> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
          <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end" style={{fontSize: "18px"}}>
            <li className="nav-item mx-3">
              <a className="custom-link" href="https://www.linkedin.com/in/henryweigand/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
            </li>
            <li className="nav-item mx-3">
              <a className="custom-link" href="https://github.com/hcweigand10" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
            </li>
            <li className="nav-item mx-3">
              <a className="custom-link" href="mailto:henryweigand10@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>
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