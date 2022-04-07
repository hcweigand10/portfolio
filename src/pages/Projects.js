import React from 'react'
import BrowserLogo from "../assets/images/Browser-Party.png"
import Skyfall from "../assets/images/Skyfall.png"
import GeoQuizzr from "../assets/images/Geoquizzr.png"

export default function Projects() {
    return (
        <div className='projects-page'>
                <div>
                    <h1 className='page-title'>My Projects</h1>
                    <div className="container" id="cnt1">
                        <div className="feature">
                            <div className="row col-md-12 mb-4 project">
                                <img className="col-md-5" src={BrowserLogo} alt="Browser Party Logo"/>
                                <div className="col-md-7 project-description">
                                  <h2 className="project-title">Browser Party</h2>
                                  <h4 className="project-subtitle">Summary</h4>
                                    <p className="project-p">
                                        Browser Party is fully browser-based multiplayer party game platform that allows users to compete and chat with each other in real time using socket.io and React. This project was an absolute joy to make and I look forward to making more and more accessible games over the years to come.
                                    </p>
                                  <h4 className="project-subtitle">Awards</h4>
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
                                  <h2 className="project-title">Skyfall Travel</h2>
                                  <h4 className="project-subtitle">Summary</h4>
                                    <p className="project-p">
                                    SkyFall Travel is full-stack application that allows users to plan and save future trips, including things like dates, stops, and budgets. Made with a MYSQL database and a bootstrap front-end.
                                    </p>
                                  <h4 className="project-subtitle">Awards</h4>
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

                            <div className="row col-md-12 mb-4 mt-5 ">
                                <img className="col-md-5" src={GeoQuizzr} alt="GeoQuizzr Screenshot"/>
                                <div className="col-md-7 project-description">
                                  <h2 className="project-title">GeoQuizzr</h2>
                                  <h4 className="project-subtitle">Summary</h4>
                                    <p className="project-p">
                                        GeoQuizzr is a simple geography trivia site that will test you with needlessly difficult questions about our world's borders. This was my first coding project that I felt proud of!
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
        </div>
    )
}


