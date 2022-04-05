import React, {useState, useEffect} from 'react'
import BrowserLogo from "../assets/images/Browser-Party.png"
import Skyfall from "../assets/images/Skyfall.png"
import GeoQuizzr from "../assets/images/Geoquizzr.png"

export default function Projects() {
    const [project, setProject] = useState("")
    return (
        <div>
            {project === "" ? (
                <div>
                    <h1 className='page-title'>My Projects</h1>
                    <div className="container" id="cnt1">
                        <div className="feature">
                            <div className="row col-md-12 mb-4 project">
                                <img className="col-md-5" src={BrowserLogo} alt="Browser Party Logo"/>
                                <div className="col-md-7 project-description">
                                  <h2>Browser Party</h2>
                                  <h5>Summary</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat, urna id vestibulum viverra, 
                                        tellus felis rutrum erat, sit amet ultrices orci urna sit amet nunc. 
                                        Fusce ut fringilla sem. Curabitur eget est vitae nulla eleifend ullamcorper et laoreet odio. 
                                        Duis condimentum feugiat sollicitudin. Sed non lacinia turpis. 
                                        Proin gravida turpis consequat porta condimentum. 
                                        Nam consequat ultricies elit nec consectetur.                        
                                    </p>
                                  <h5>Awards</h5>
                                    <ul>
                                        <li>Best Functionality</li>
                                    </ul>
                                    <div className='buttons'>
                                        <a href="https://browser-party.herokuapp.com/play" className="btn-custom btn-pink lower" target="_blank" rel="noreferrer">Deployed Site</a>
                                        <a href="https://github.com/kingnolds/Browser-Party" className="btn-custom btn-blue lower" target="_blank" rel="noreferrer">Github Repo</a>
                                    </div>
                                </div>
                            </div>

                            <div className="row col-md-12 mb-4 mt-5 project">
                                <div className="col-md-7 project-description">
                                  <h2>Skyfall Travel</h2>
                                  <h5>Summary</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat, urna id vestibulum viverra, 
                                        tellus felis rutrum erat, sit amet ultrices orci urna sit amet nunc. 
                                        Fusce ut fringilla sem. Curabitur eget est vitae nulla eleifend ullamcorper et laoreet odio. 
                                        Duis condimentum feugiat sollicitudin. Sed non lacinia turpis. 
                                        Proin gravida turpis consequat porta condimentum. 
                                        Nam consequat ultricies elit nec consectetur.                        
                                    </p>
                                  <h5>Awards</h5>
                                    <ul>
                                        <li>People's Choice (Best Overall)</li>
                                        <li>Best Functionality</li>
                                    </ul>
                                    <div className='buttons'>
                                        <a href="https://skyfall-travel.herokuapp.com/" className="btn-custom btn-pink lower" target="_blank" rel="noreferrer">Deployed Site</a>
                                        <a href="https://github.com/hcweigand10/SkyFall-Travel" className="btn-custom btn-blue lower" target="_blank" rel="noreferrer">Github Repo</a>
                                    </div>
                                </div>
                                <img className="col-md-5" src={Skyfall} alt="Skyfall screenshot"/>
                            </div>

                            <div className="row col-md-12 mb-4 mt-5 project">
                                <img className="col-md-5" src={GeoQuizzr} alt="GeoQuizzr Screenshot"/>
                                <div className="col-md-7 project-description">
                                  <h2>GeoQuizzr</h2>
                                  <h5>Summary</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat, urna id vestibulum viverra, 
                                        tellus felis rutrum erat, sit amet ultrices orci urna sit amet nunc. 
                                        Fusce ut fringilla sem. Curabitur eget est vitae nulla eleifend ullamcorper et laoreet odio. 
                                        Duis condimentum feugiat sollicitudin. Sed non lacinia turpis. 
                                        Proin gravida turpis consequat porta condimentum. 
                                        Nam consequat ultricies elit nec consectetur.                        
                                    </p>
                                    <div className='buttons'>
                                        <a href="https://hcweigand10.github.io/Geoquizzr/" className="btn-custom btn-pink lower" target="_blank" rel="noreferrer">Deployed Site</a>
                                        <a href="https://github.com/hcweigand10/Geoquizzr" className="btn-custom btn-blue lower" target="_blank" rel="noreferrer">Github Repo</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            ) :null}
            {project === "Browser Party" ? (
                <h1>{project}</h1>

            ) :null}
            {project === "Skyfall Travel" ? (
                <h1>{project}</h1>

            ) :null}
            {project === "GeoQuizzr" ? (
                <h1>{project}</h1>

            ) :null}
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}


