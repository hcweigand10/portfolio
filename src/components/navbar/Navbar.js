import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";
import { MDBCollapse } from 'mdb-react-ui-kit';

const Navbar = () => {
    const [activePage, setActivePage] = useState(window.location.pathname);
    const [collapse, setCollapse] = useState(true);

    
    const handlePageChange = (page) => {
      setActivePage(page);
    };
    
    const handleCollapse = () => {
      // const collapseNavBar = document.getElementById("navbarSupportedContent");
      // if (collapse) {
      //   collapseNavBar.classList.toggle("collapse");
      //   collapseNavBar.classList.add("opening");
      //   setTimeout(() => {
      //     collapseNavBar.classList.remove("opening");
      //   }, 350);
      // } else {
      //   collapseNavBar.classList.add("collapse");
      // }
      setCollapse(!collapse);
    };
    
    // const show = () => {
    //   const collapseNavBar = document.getElementById("navbarSupportedContent");
    //   collapseNavBar.style.height = '0px';
    //   collapseNavBar.style.transition = 'height 300ms';
    //   collapseNavBar.style.height = collapseNavBar.scrollHeight + 'px';
    // }
    
    // const hide = () => {
    //   const collapseNavBar = document.getElementById("navbarSupportedContent");
    //   collapseNavBar.style.height = collapseNavBar.getBoundingClientRect().height + 'px';
    //   collapseNavBar.style.transition = 'height 300ms';
    //   collapseNavBar.style.height = '0px';
    // }

    return (
        // <!-- Navbar -->
        <nav className="navbar navbar-expand-md navbar-dark p-0 bg-dark">
            {/* <!-- Container wrapper --> */}
            <div className="container-fluid custom-nav" id="cmco">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleCollapse}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {/* <!-- Navbar brand --> */}
                <Link
                    className="navbar-brand mt-md-0 p-2"
                    to="/"
                    onClick={() => handlePageChange("/")}
                >
                    Henry Weigand
                </Link>
                {/* <!-- Collapsible wrapper --> */}
                <MDBCollapse
                    className="navbar-collapse align-items-center my-3"
                    id="navbarSupportedContent"
                    show={!collapse}
                >
                    {/* <!-- Left links --> */}
                    <ul className="navbar-nav me-auto mb-md-0 mb-1" style={{fontSize: "medium"}}>
                        <li className="nav-item">
                            <Link
                                className={
                                    activePage === "/"
                                        ? "nav-link custom-link-active"
                                        : "nav-link custom-link"
                                }
                                to="/"
                                onClick={() => handlePageChange("/")}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={
                                    activePage === "/about"
                                        ? "nav-link custom-link-active"
                                        : "nav-link custom-link"
                                }
                                to="/about"
                                onClick={() => handlePageChange("/about")}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={
                                    activePage === "/projects"
                                        ? "nav-link custom-link-active"
                                        : "nav-link custom-link"
                                }
                                to="/projects"
                                onClick={() => handlePageChange("/projects")}
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>
                    {/* <!-- Left links --> */}
                    {/* <!-- Rght links --> */}
                    <ul
                        className="navbar-nav mb-md-0 py-2 justify-content-end d-inline"
                        style={{ fontSize: "18px" }}
                    >
                        <li
                            className="d-inline me-3 btn btn-custom"
                            style={{ backgroundColor: "#0077b5" }}
                        >
                            <a
                                className="text-light"
                                href="https://www.linkedin.com/in/henryweigand/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li
                            className="d-inline me-3 btn btn-custom"
                            style={{ backgroundColor: "black" }}
                        >
                            <a
                                className="text-light"
                                href="https://github.com/hcweigand10"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li
                            className="d-inline me-3 btn btn-custom"
                            style={{ backgroundColor: "red" }}
                        >
                            <a
                                className="text-light"
                                href="mailto:henryweigand10@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </li>
                    </ul>
                    {/* <!-- Rght links --> */}
                </MDBCollapse>
                {/* <!-- Collapsible wrapper --> */}
            </div>
        </nav>
    );
};

export default Navbar;
