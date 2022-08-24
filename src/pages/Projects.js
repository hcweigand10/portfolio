import React from "react";
import BrowserPic from "../assets/images/Browser.png";
import SkyfallPic from "../assets/images/Skyfall1.png";
import GeoQuizzrPic from "../assets/images/GeoQuizzrPic.png"
import FakeYoutubePic from "../assets/images/fakeYoutube.png";
import DoschRealty from "../assets/images/brad-dosch.png";
import Project from "../components/Project";

export default function Projects() {
    const projects = [
        {
            title: "Dosch Realty",
            description:
                "React Website built for Bradley Dosch, a Seattle-based realtor. The site featues an elegant design, built in content manager for Brad to easily add and update blog posts, and connected sql database for storing and accessing blogs and testimonials written by former clients",
            awards: "",
            liveUrl: "https://profound-lollipop-4eb9d0.netlify.app/",
            github: "https://github.com/hcweigand10/fake-youtube",
            featured: true,
            pic: DoschRealty,
        },
        {
            title: "Browser Party",
            description:
                "Browser Party is fully browser-based multiplayer party game that allows users to compete and chat with each other in real time using socket.io and React. This project was a blast to make!",
            awards: "Best Functionality",
            liveUrl: "https://browser-party.herokuapp.com/",
            github: "https://github.com/kingnolds/Browser-Party",
            featured: false,
            pic: BrowserPic,
        },
        {
            title: "Skyfall Travel",
            description:
                "Skyfall Travel was my first full-stack application. It utilizes a MYSQL database to enable users to plan, and save future trips to their account, including things like stops, dates, and budget breakdowns.",
            awards: "Best Overall and Best Functionality",
            liveUrl: "https://skyfall-travel.herokuapp.com/",
            github: "https://github.com/hcweigand10/SkyFall-Travel",
            featured: false,
            pic: SkyfallPic,
        },
        {
            title: "Fake Youtube",
            description:
                "I made this 'fake youtube' site using Youtube's open API, react class and function based components, and semantic UI styling.",
            awards: "",
            liveUrl: "https://main--majestic-mandazi-298247.netlify.app/",
            github: "https://github.com/hcweigand10/fake-youtube",
            featured: false,
            pic: FakeYoutubePic,
        },
        {
            title: "eCommerce Backend",
            description:
                "This project was an exercise in setting up a backend for a potential eCommerce sight. I used MYSQL and an MVC architectural structure to enable fast and effortless database management",
            awards: "",
            liveUrl: "https://github.com/hcweigand10/ORM-eCommerce",
            github: "https://github.com/hcweigand10/ORM-eCommerce",
            featured: false,
            pic: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.business2community.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fecommerce.png&f=1&nofb=1",
        },
        {
            title: "GeoQuizzr",
            description: "GeoQuizzr is a simple geography trivia site that will test you with needlessly difficult questions about our world's borders. This was my first coding project that I felt proud of!",
            awards: "",
            liveUrl: "https://hcweigand10.github.io/Geoquizzr/",
            github: "https://github.com/hcweigand10/Geoquizzr",
            featured: false,
            pic: GeoQuizzrPic
        },
    ];

    const nonFeatured = projects
        .filter((project) => !project.featured)
        .map((project, index) => <Project project={project} key={index}/>);

    return (
        <div>
            <header
                className="sidebar projects-sidebar text-center d-block pb-4 col-md-3"
                style={{}}
            >
                <div
                    className="masthead position-sticky mt-3 container"
                    style={{ overflow: "hidden", marginTop: "40%" }}
                >
                    <h1>Checkout my work!</h1>
                    <p className="text-muted">
                        I'll keep my favorite projects near the top of this
                        list, and will continue to update them over time
                    </p>
                </div>
            </header>
            <main
                className="container bg-light col-md-9 me-0 pt-2"
                id="projects-content"
            >
                <div className="main mx-auto">
                    <div
                        className="row mb-4 card bg-light"
                        style={{ border: "none" }}
                    >
                        <h3 className="mb-3">Featured</h3>
                        <Project project={projects[0]} />
                        <h3 className="my-3">More Projects</h3>
                        <div className="row">{nonFeatured}</div>
                    </div>
                </div>
            </main>
        </div>
    );
}
