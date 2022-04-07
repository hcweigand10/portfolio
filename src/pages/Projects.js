import React from 'react'
import BrowserPic from "../assets/images/Browser.png"
import SkyfallPic from "../assets/images/Skyfall1.png"
import GeoQuizzrPic from "../assets/images/GeoQuizzrPic.png"

export default function Projects() {
    return (
        <div className='projects-page page'>
            <div>
               <div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<h1 class="heading-section m4-5 page-title">My Projects</h1>
					</div>
					<div class="col-md-12">
						<div class="featured-carousel owl-carousel mb-5">
							<div class="item browser-party">
								<div class="work-wrap d-md-flex">
                                    <div class="text text-left text-lg-right p-4 px-xl-5 d-flex align-items-center">
                                        <div class="desc row w-100">
                                            <div className='col-lg-4'>
                                                <h2 class="mb-4">Browser Party</h2>

                                                <div class="row">
                                                    <div>
                                                        <p className="plain-text">Browser Party is fully browser-based multiplayer party game platform that allows users to compete and chat with each other in real time using socket.io and React. This project was an absolute joy to make and I look forward to making more and more accessible games over the years to come.</p>
                                                    </div>
                                                </div>
                                                <p className='mt-4 project-buttons'>
                                                    <a href="https://browser-party.herokuapp.com/" target="_blank" rel="noreferrer" className="btn-1 mb-2 py-3 px-4">Deployed Site</a>
                                                    <a href="https://github.com/kingnolds/Browser-Party" target="_blank" rel="noreferrer" className="btn-2 mb-2 py-3 px-4">Github Repo</a>
                                                </p>
                                            </div>
                                            <img class="col-lg-8" src={BrowserPic} alt="BrowserPic"/>
                                        </div>
                                    </div>
								</div>
							</div>
                            <br/>
                            <hr/>
                            <br/>
							<div class="item skyfall">
								<div class="work-wrap d-md-flex">
									<div class="text text-left text-lg-right p-4 px-xl-5 d-flex align-items-center">
                                        <div class="desc row w-100">
                                            <div className='col-lg-4'>
                                                <h2 class="mb-4">Skyfall Travel</h2>

                                                <div class="row">
                                                    <div>
                                                        <p className="plain-text">Browser Party is fully browser-based multiplayer party game platform that allows users to compete and chat with each other in real time using socket.io and React. This project was an absolute joy to make and I look forward to making more and more accessible games over the years to come.</p>
                                                    </div>
                                                </div>
                                                <p className='mt-4 project-buttons'>
                                                    <a href="https://browser-party.herokuapp.com/" target="_blank" rel="noreferrer" className="btn-1 mb-2 py-3 px-4">Deployed Site</a>
                                                    <a href="https://github.com/kingnolds/Browser-Party" target="_blank" rel="noreferrer" className="btn-2 mb-2 py-3 px-4">Github Repo</a>
                                                </p>
                                            </div>
                                            <img class="col-lg-8" src={SkyfallPic} alt="SkyfallPic"/>
                                        </div>
									</div>
								</div>
							</div>
                            <br/>
                            <hr/>
                            <br/>
							<div class="item geoquizzer">
								<div class="work-wrap d-md-flex">
									<div class="text text-left text-lg-right p-4 px-xl-5 d-flex align-items-center">
                                        <div class="desc row w-100">
                                            <div className='col-lg-4'>
                                                <h2 class="mb-4">GeoQuizzr</h2>
                                                <div class="row">
                                                    <div>
                                                        <p className="plain-text">GeoQuizzr is a simple geography trivia site that will test you with needlessly difficult questions about our world's borders. This was my first coding project that I felt proud of!</p>
                                                    </div>
                                                </div>
                                                <p className='mt-4 project-buttons'>
                                                    <a href="https://skyfall-travel.herokuapp.com/" target="_blank" rel="noreferrer" className="btn-1 mb-2 py-3 px-4">Deployed Site</a>
                                                    <a href="https://github.com/kingnolds/Browser-Party" target="_blank" rel="noreferrer" className="btn-2 mb-2 py-3 px-4">Github Repo</a>
                                                </p>
                                            </div>
                                            <img class="col-lg-8" src={GeoQuizzrPic} alt="GeoQuizzr Pic"/>
                                        </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            </div>
        </div>
    )
}

