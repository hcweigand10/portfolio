import React from 'react'

const Resume = () => {

    return (
        <div className='page resume-id'>
                <h1 className="ui header" style={{textAlign: "center"}}>Resume</h1>
                <div className='ui grid container mb-4' style={{paddingTop: "3em", display: "flex", justifyContent: "center"}}>
                    <div className='row resume-custom-row' >
                        <div className='five wide column left' style={{borderRight: "solid lightgray 1px"}}>
                            <div className='ui grid'>
                                
                                <div className='sixteen wide column' style={{paddingTop: "0px", paddingBottom: "0px"}} id="no-bm">
                                    <h3 className='ui header' id="no-margin">Languages</h3>
                                    <div className='ui grid stackable'>
                                        <div className='eight wide column custom-left' id="no-pad" >
                                            <ul style={{listStyleType: "none", padding: "0px"}}>
                                                <li className="contact-item">
                                                JavaScript 
                                                </li>
                                                <li className="contact-item">
                                                    Python
                                                </li>
                                                <li className="contact-item">
                                                    HTML
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='eight wide column custom-left' id='no-pad1'>
                                            <ul style={{listStyleType: "none", padding: "0px"}}>
                                                <li className="contact-item">
                                                    SQL
                                                </li>
                                                <li className="contact-item">
                                                    CSS
                                                </li>
                                                <li className="contact-item">
                                                    Bash
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='sixteen wide column' style={{paddingTop: "0px", paddingBottom: "0px"}} id="no-bm2">
                                    <hr />
                                    <h3 className='ui header' id="no-margin2">Tools</h3>
                                    <div className='ui grid stackable'>
                                        <div className='eight wide column custom-left'  id='no-pad2'>
                                            <ul style={{listStyleType: "none", padding: "0px"}}>
                                                <li className="contact-item">
                                                    React.js
                                                </li>
                                                <li className="contact-item">
                                                    Node.js
                                                </li>
                                                <li className="contact-item">
                                                    Express.js
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='eight wide column custom-left' id='no-pad3'>
                                            <ul style={{listStyleType: "none", padding: "0px", marginBottom: "10px"}}>
                                                <li className="contact-item">
                                                    Semantic UI
                                                </li>
                                                <li className="contact-item">
                                                    MongoDB
                                                </li>
                                                <li className="contact-item">
                                                    Socket.io
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='sixteen wide column' style={{paddingTop: "0px", paddingBottom: "0px"}}>
                                    <hr/>
                                    <h3 className='ui header' id="no-margin3">Campus</h3>
                                    <p style={{marginBottom: "3px"}}><strong>Fraternity President</strong> <br/>
                                    <i>University of Washington <br/> 
                                    Seattle, WA | 2017 - 2018</i></p>
                                    <ul >
                                        <li>Managed eight other executive board members</li>
                                        <li>Oversaw $170,000 annual budget</li>
                                        <li>Recruited 22 new members over tenure</li>
                                    </ul>
                                    <p><strong>Dean's List</strong> <br/>
                                    <i>University of Washington <br/> 
                                    Seattle, WA | 2015 - 2019</i></p>
                                </div>
                            </div>
                        </div>
                        <div className='eleven wide column right'>
                            <div className='ui grid'>
                                <div className='sixteen wide column' style={{paddingTop: "0px", paddingBottom: "0px"}}>
                                    <h3 className='ui header' id="no-margin4">Education</h3>
                                    <p><strong>Civil Engineering, BS</strong> <br/>
                                    <i>University of Washington | 
                                    Seattle, WA | 2015 - 2019</i></p>
                                </div>
                                <div className='sixteen wide column' style={{paddingTop: "0px", paddingBottom: "0px"}}>
                                    <hr/>
                                    <h3 className='ui header' id="no-margin5">Experience</h3>
                                    <p style={{marginBottom: "3px"}}><strong>Coding Boot Camp Certificate</strong> <br/> 
                                    <i>University of Washington | 
                                    Seattle, WA | 2021 - 2022</i></p>
                                    <ul >
                                        <li>Learned front end and back end technologies through a dynamic full stack curriculum</li>
                                        <li>More info: <a href='bootcamp.uw.edu/coding/' target="_blank">bootcamp.uw.edu/coding/</a></li>
                                    </ul>
                                    <p><strong>Math Tutor</strong> <br/> 
                                    <i>Mathnasium Northwest | 
                                    Seattle, WA | 2018 - Present</i></p>
                                    <p><strong>Server/Bartender</strong> <br/> 
                                    <i>Hale's Ales Brewery | 
                                    Seattle, WA | 2021</i></p>
                                    <p style={{marginBottom: "3px"}}><strong>Project Intern</strong> <br/> 
                                    <i>Association for Promoting Social Action | 
                                    Bangalore, India | 2019</i></p>
                                    <ul >
                                        <li>Consulted with a local non-profit to develop a plan to deliver science lessons andSTEM materials to a network of Bangalore public schools in underprivilegedneighborhoods</li>
                                        <li>Framework was then used for lessons on evaporation and forces at our team’s pilotschool</li>
                                    </ul>
                                    <p style={{marginBottom: "3px"}}><strong>Engineering Intern</strong> <br/> 
                                    <i>City of Kent Engineering Department | 
                                    Kent, WA | 2018</i></p>
                                    <ul >
                                        <li>Used Civil 3D and AutoCAD to advise utility projects and approve construction planspertaining to new or existing housing developments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Resume