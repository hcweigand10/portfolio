import React from 'react'
import profPic from '../assets/images/Prof_Pic.JPG'
import skyfallImg from '../assets/images/Skyfall_Travel.png'

export default function Home() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#">Henry Weigand</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" key="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#about-me">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#examples-grid">My Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </header>  
            <main className="container">

                <h4>About Me</h4>
                <hr/>

                <section className="card m-5" key="about-me">
                    <div className="row g-0">
                    <div className="col-md-2">
                        <img src={profPic} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                        <p className="card-text">Hey there! My name is Henry Weigand and I'm a born and raised Seattle local. I only started coding in late 2021 but am excited to pursue web development and software engineering as both a career and a hobby. </p>
                        <p>
                            Away from the computer, I enjoy watching and playing pretty much every sport ever concieved, playing video games way too competitively, and (attempting to) win pub trivia competitions. But most importantly, I want to travel, and here's to hoping that a tech career can open that door for me :)
                        </p>
                        </div>
                    </div>
                    </div>
                </section>

                <h4>My Work</h4>
                <hr/>

                <section key="my-work" className="container m-5">

                    <div className="row ">

                    <div className="card mb-4">
                        <h5 className="card-header">Featured</h5>

                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe5%2Fe3%2F1b%2Fe5e31bec5a92d24929ae5298e582e82a.jpg&f=1&nofb=1" className="card-img-top" alt="world background"/>
                        <div className="card-body">
                        <h5 className="card-title">GeoQuizzr</h5>
                        <p className="card-text">A 22-question geography-themed quiz that will push your knowledge of our world to its limits</p>
                        <a href="https://hcweigand10.github.io/code-quiz/" className="btn btn-primary">Take the Quiz!</a>
                        <a href="https://github.com/hcweigand10/code-quiz" className="btn btn-primary">Github Repo</a>
                        </div>
                    </div>

                    <div className="card col-6">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jmnafz7h5N8xzPI0WCPMMAHaD3%26pid%3DApi&f=1" className="card-img-top" alt="world background"/>
                        <div className="card-body">
                        <h5 className="card-title">MovieMadness</h5>
                        <p className="card-text">The perfect website to find the right choice for your next movie night</p>
                        <a href="https://bubuttercup.github.io/MovieMadness/" className="btn btn-primary">Spin the Reel!</a>
                        <a href="https://github.com/BUButtercup/MovieMadness" className="btn btn-primary">Github Repo</a>
                        </div>
                    </div>

                    <div className="card col-6">
                        <img src={skyfallImg} className="card-img-top" alt="skyfall-image"/>
                        <div className="card-body">
                        <h5 className="card-title">Skyfall Travel</h5>
                        <p className="card-text">My first full-stack web application to plan out and save your next dream vacation</p>
                        <a href="https://skyfall-travel.herokuapp.com/" className="btn btn-primary">Start Planning!</a>
                        <a href="https://github.com/hcweigand10/skyfall-travel" className="btn btn-primary">Github Repo</a>
                        </div>
                    </div>

                    </div>

                </section>

                <h4>Contact</h4>
                <hr/>

                <section className="m-5" key="contact">
                    <div className="row">
                        <div className="col border-right">
                        <a href="">henryweigand10@gmail.com</a>
                        </div>
                        <div className="col border-right">
                        <a href="">Github</a>
                        </div>
                        <div className="col">
                        <a href="">Spotify</a>
                        </div>
                    </div>
                </section>


            </main>
            <footer>
                <h4>foot</h4>
            </footer>
        </div>
    )
}
