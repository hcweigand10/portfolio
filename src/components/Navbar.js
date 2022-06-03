import React, {useState} from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activePage, setActivePage] = useState("home")

    const handlePageChage = (e,newpage) => {
        e.preventDefault()
        console.log(document.querySelector(`#${newpage}`).classList)
        document.querySelector(`#${newpage}`).setAttribute("class", "ui item active")
        document.querySelector(`#${activePage}`).setAttribute("class", "ui item")
        setActivePage(newpage)
    }

    return (
    // <!--Start: Nav  -->
    <div className="ui fixed borderless menu">
        
        {/* <!--Start: Desktop Nav--> */}
          <Link className="header ui item" key="home" to="/" onClick={() => {setActivePage("home")}}>Henry Weigand</Link>
          <Link className={activePage === "about" ? "ui item active" : "ui item"} key="about" to="/about" onClick={() => {setActivePage("about")}}>About</Link>
          <Link className={activePage === "work" ? "ui item active" : "ui item"} key="work" to="/work" onClick={() => {setActivePage("work")}}>Work</Link>          
          <Link className={activePage === "resume" ? "ui item active" : "ui item"} key="resume" to="/resume" onClick={() => {setActivePage("resume")}}>Resume</Link>
          
        </div>
  )
}

export default Navbar