import React from "react"
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./footer.css"


const Footer = () => {



    return (
        
        <footer class="footer mt-auto">
             <div class="container p-4 pb-0">
            {/* <!-- Section: Links --> */}
            <section class="">
                {/* <!--Grid row--> */}
                <div class="row">
                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-2">
                    <h4 class="text-uppercase text-center mb-2 font-weight-bold">
                    Connect
                    </h4>
                    <div className="">
                        <ul class="nav list-unstyled d-flex justify-content-center align-items-center">
                            <li class="ms-3"> 
                                <a
                                    class="btn btn-floating m-2 btn-custom"
                                    style={{backgroundColor: "#0072b1"}}
                                    href="https://www.linkedin.com/in/henryweigand/"
                                    target="_blank"
                                    rel="noreferrer"
                                    role="button">
                                    <FontAwesomeIcon icon={faLinkedin}/>
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
                                    <FontAwesomeIcon icon={faGithub}/>
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
                </div>
                {/* <!-- Grid column --> */}

                <hr class="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                {/* <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-2 d-flex justify-content-center">
                    <div>
                        <h4 class="text-uppercase text-center mb-3 font-weight-bold w-100">Contact</h4>
                    </div>
                    <ul className="nav list-unstyled d-flex justify-content-center align-items-center">
                        <li><p><i class="fas fa-home pr-2"></i> Seattle, WA, US</p></li>
                        <li><p><i class="fas fa-envelope pr-2"></i> henryweigand10@gmail</p></li>
                        <li><p><i class="fas fa-phone pr-2"></i> +1 206-349-9260</p></li>
                    </ul>
                </div> */}
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-2">
                    <h4 class="text-uppercase text-center mb-2 font-weight-bold">
                    Contact
                    </h4>
                    <ul class="text-center list-unstyled align-items-center">
                        <li><p><i class="fas fa-home pr-2"></i> Seattle, WA, US</p></li>
                        <li><p><i class="fas fa-envelope pr-2"></i> henryweigand10@gmail</p></li>
                        <li><p><i class="fas fa-phone pr-2"></i> +1 206-349-9260</p></li>
                    </ul>
                </div>
                {/* <!-- Grid column --> */}
                </div>
                {/* <!--Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div
                class="text-center p-3"
                style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                >
            © 2022 Copyright: &nbsp;
            <a class="text-white" href="https://henryweigand.com/" style={{textIndent: "10px"}}>henryweigand.com</a>
            </div>
        </footer>
    )
}


                 

export default Footer