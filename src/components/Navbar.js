import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom container">
            <ul className="nav-ul">
                <li className="nav-item-custom nav-item-custom-1">
                    <Link className="navy" to="/">Home</Link>
                </li>
                <li className="nav-item-custom nav-item-custom-1">
                    <Link className="navy" to="/about">About</Link>
                </li>
                <li className="nav-item-custom nav-item-custom-1">
                    <Link className="navy" to="/my-work">Work</Link>
                </li>
                <li className="nav-item-custom nav-item-custom-2">
                    <Link className="navy" to="/resume">Resume</Link>
                </li>
            </ul>
        </nav>
      </div>
  )
}