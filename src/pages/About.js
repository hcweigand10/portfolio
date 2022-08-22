import React from 'react'
import profPic from '../assets/images/zoomedProfpic.png'


export default function About() {
    return (

        <div className='container mt-4'>
            <section className="px-4 pt-0 pb-2" key="about-me">
                 <div className="row g-5 my-3">
                    <div className="col-md-4">
                        <img src={profPic} className="img-fluid p-2" alt="profile-pic" style={{borderRadius: "50%"}}/>
                    </div>
                    <div className="col-md-8 card p-3 shadow-sm">
                        <div className='card-title text-center'>
                            <h2 className='title'>About Me</h2>
                        </div>
                        <div className="card-body">
                        <p className="plain-text">
                            I am a born and raised Seattlite and recent University of Washington graduate. I started coding in 2021 and am excited to pursue web development and software engineering as both a career and a hobby. </p>
                        <p>
                            During the 2021-22 winter, I enrolled in the University of Washington's Full-Stack coding bootcamp, fully diving into this new chapter. Thanks to the diligence of my professor and TAs (shoutout Joe Rehfuss!) I came away with not only a foundation of web development skills, but also experience with professional workflows and project management. Out of all we learned, I am most excited to learn more about everything related to React, MVC structures, and of course my first love: vanilla JavaScript.
                        </p>
                        <p>
                            Away from the computer, I enjoy watching and playing sports, playing video games way too competitively, and (attempting to) win pub trivia competitions. But most importantly, I want to travel, and here's to hoping that a tech career can open that door for me. :)
                        </p>
                        </div>
                    </div>
                 </div>
             </section>
        </div>
    )
}
