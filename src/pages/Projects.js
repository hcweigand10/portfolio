import React from 'react'
import BrowserPic from "../assets/images/Browser.png"
import SkyfallPic from "../assets/images/Skyfall1.png"
import GeoQuizzrPic from "../assets/images/GeoQuizzrPic.png"
import FakeYoutubePic from "../assets/images/fakeYoutube.png"
import Project from "../components/Project"

export default function Projects() {
    
    const projects = {
        BrowserParty: {
            description: "Browser Party is fully browser-based multiplayer party game platform that allows users to compete and chat with each other in real time using socket.io and React. This project was an absolute joy to make and I look forward to making more and more accessible games over the years to come.",
            awards: "Awards: Best Functionality",
            liveUrl: "https://browser-party.herokuapp.com/",
            github: "https://github.com/kingnolds/Browser-Party",
        },
        Skyfall: {
            description: "Skyfall Travel was my first full-stack application. It utilizes a MYSQL database to enable users to plan, and save future trips to their account, including things like stops, dates, and budget breakdowns.",
            awards: "Awards: Best Overall and Best Functionality",
            liveUrl: "https://skyfall-travel.herokuapp.com/",
            github: "https://github.com/hcweigand10/SkyFall-Travel",
        },
        FakeYoutube: {
            description: "I made this 'fake youtube' site using Youtube's open API, react class and function based components, and semantic UI styling.",
            awards: "",
            liveUrl: "https://main--majestic-mandazi-298247.netlify.app/",
            github: "https://github.com/hcweigand10/fake-youtube",
        },
        GeoQuizzr: {
            description: "GeoQuizzr is a simple geography trivia site that will test you with needlessly difficult questions about our world's borders. This was my first coding project that I felt proud of!",
            awards: "",
            liveUrl: "https://hcweigand10.github.io/Geoquizzr/",
            github: "https://github.com/hcweigand10/Geoquizzr",
        },
    }
    
    return (
        <div className='projects-page page'>
            <div>
               <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                        <h1 className='ui header m-3' style={{textAlign: "center"}}>My Work</h1>
                        </div>
                        <div className="col-md-12">
                            <div className="featured-carousel owl-carousel mb-5">
                                <Project title="Browser Party" 
                                projectObj={projects.BrowserParty}
                                pic={BrowserPic}
                                />
                                <br/>
                                <hr/>
                                <br/>
                                
                                <Project title="Skyfall Travel" 
                                projectObj={projects.Skyfall}
                                pic={SkyfallPic}
                                />
                                <br/>
                                <hr/>
                                <br/>
                                <Project title="Fake Youtube" 
                                projectObj={projects.FakeYoutube}
                                pic={FakeYoutubePic}
                                />
                                <br/>
                                <hr/>
                                <br/>
                                <Project title="GeoQuizzr" 
                                projectObj={projects.GeoQuizzr}
                                pic={GeoQuizzrPic}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

