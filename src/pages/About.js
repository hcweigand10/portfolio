import React from 'react'
import profPic from '../assets/images/Prof_Pic.JPG'


export default function About() {
    return (
        <div className='about-page'>
            <div className='container container-about'>
                <h1 className='page-title'>Me in 30 seconds</h1>
                <section className="m-4" key="about-me">
                        <div className="row g-0">
                        <div className="col-md-4">
                            <img src={profPic} className="img-fluid rounded-start" alt="profile-pic"/>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <div className="card-body">
                            <p className="card-text">
                                I am a born and raised Seattlite and recent University of Washington graduate. I only started coding in late 2021 but am excited to pursue web development and software engineering as both a career and a hobby. </p>
                            <p>
                                During the 2021-22 winter, I enrolled in the University of Washington's Full-Stack coding bootcamp, fully diving into this new chapter. Thanks to the diligence of my professor and TAs (shoutout Joe Rehfuss!) I came away with not only a foundation of web development skills, but also experience with professional workflows and project management. Out of all we learned, I think I am most excited to learn more about everything related to React, MVC structures, and of course my first love: vanilla JavaScript.
                            </p>
                            <p>
                                Away from the computer, I enjoy watching and playing sports, playing video games way too competitively, and (attempting to) win pub trivia competitions. But most importantly, I want to travel, and here's to hoping that a tech career can open that door for me. :)
                            </p>
                            </div>
                        </div>
                        </div>
                    </section>
            </div>
        </div>
    )
}
