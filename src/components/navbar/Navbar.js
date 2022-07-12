import React, { useState } from "react";
import { Link  } from 'react-router-dom';
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 custom-nav">
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
              <Link className={(activePage==="/work") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/work" onClick={() => handlePageChange("/work")}>Work</Link>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}

      </div>
    </nav>

  );
}

export default Navbar;