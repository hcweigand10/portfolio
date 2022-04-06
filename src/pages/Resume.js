import React from 'react'


export default function Resume() {
    return (
        <div className='resume-page'>
            <div className='container-resume col-md-6 col-lg-5 col-sm-11 container'>
                <h1 className='page-title'>Resume</h1>
                <h6 className='objective'>
                Full Stack Web Developer with a background in Civil Engineering and leadership positions. Seeking a full-time software engineering position with an ethical and sustainable organization.
                </h6>

                <h3 className='resume-subtitle'>Education</h3>
                <p><span className='resume-item'><strong>Boot Camp Certificate</strong>&nbsp;&nbsp;|&nbsp;&nbsp;University of Washington&nbsp;&nbsp;|&nbsp;&nbsp;Seattle, WA&nbsp;&nbsp;|&nbsp;&nbsp;2021 - 22 </span><br/>
                <span>A 14-week intensive program focused on technical programming skills as well as exposure to industry workflows. (Learn more <a href="https://bootcamp.uw.edu/coding/" target="_blank" rel="noreferrer">here</a>)</span>
                </p>
                <p className='resume-item'><strong>Bachelor's of Science in Civil Engineering</strong>&nbsp;&nbsp;|&nbsp;&nbsp;University of Washington&nbsp;&nbsp;|&nbsp;&nbsp;Seattle, WA&nbsp;&nbsp;|&nbsp;&nbsp;2015 - 19</p>

                <h3 className='resume-subtitle'>Technical Skills</h3>
                <p className='resume-item'><strong>Languages:</strong>  JavaScript, HTML, MYSQL, CSS	<br/><strong>Tools/Applications:</strong>  React, Node, Express, Handlebars, MongoDB, Socket.io</p>

                <h3 className='resume-subtitle'>Experience</h3>
                <p><span className='resume-item'><strong>Math Tutor</strong>&nbsp;&nbsp;|&nbsp;&nbsp;Mathnasium Northwest&nbsp;&nbsp;|&nbsp;&nbsp;Seattle, WA&nbsp;&nbsp;|&nbsp;&nbsp;2019 - Current <br/></span>		
                Have tutored over 100 K-12 students in all relevant math subjects, earning multiple pay raises.
                </p>

                <p><span className='resume-item'><strong>Engineering Intern </strong>&nbsp;&nbsp;|&nbsp;&nbsp;City of Kent Economic Development&nbsp;&nbsp;|&nbsp;&nbsp;Seattle, WA&nbsp;&nbsp;|&nbsp;&nbsp;2018<br/></span>
                Worked with city engineers to create and plan new housing developments and other long-term growth projects in the rapidly growing city of Kent, Washington. 
                </p>

                <p><span className='resume-item'><strong>President</strong>&nbsp;&nbsp;|&nbsp;&nbsp;Alpha Epsilon Pi&nbsp;&nbsp;|&nbsp;&nbsp;Seattle, WA&nbsp;&nbsp;|&nbsp;&nbsp;2017 - 18<br/></span> 
                Served as president for a year at Alpha Epsilon Pi's UW chapter. Was directly responsible for the wellbeing of over 60 members and our $180,000 annual budget while overseeing the directives of eight other executive board members. Also recruited 22 new members to the organization during the tenure.
                </p>
            </div>
        </div>
    )
}