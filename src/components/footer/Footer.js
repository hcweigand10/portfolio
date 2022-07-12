import React from "react"
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./footer.css"


const Footer = () => {



    return (
        
        <footer class="d-flex flex-wrap justify-content-center align-items-center p-3 border-top">
             <div class="col-md-4 d-flex align-items-center text-light mb-0">
                <a class="text-decoration-none" href="/">
                    <FontAwesomeIcon color="lightgray" icon={faHome}/><span> Go Home</span>
                </a>
            </div>
            <div className="mb-0 mt-1 d-flex">
                <ul class="nav list-unstyled d-flex">
                    <li class="ms-3">
                        <a
                            class="btn btn-floating m-2 btn-custom"
                            style={{backgroundColor: "#0072b1"}}
                            href="https://www.linkedin.com/in/henryweigand/"
                            target="_blank"
                            rel="noreferrer"
                            role="button">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li class="ms-3">
                        <a
                            class="btn btn-floating m-2 btn-custom"
                            style={{backgroundColor: "black", color: "white"}}
                            href="https://github.com/hcweigand10/"
                            target="_blank"
                            rel="noreferrer"
                            role="button">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                    <li class="ms-3">
                        <a
                            class="btn btn-floating m-2 btn-custom"
                            style={{backgroundColor: "red", color: "white"}}
                            href="mailto:henryweigand10@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            role="button">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}


export default Footer