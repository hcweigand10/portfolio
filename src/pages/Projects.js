import React from 'react'
import BrowserPic from "../assets/images/Browser.png"
import SkyfallPic from "../assets/images/Skyfall1.png"
import GeoQuizzrPic from "../assets/images/GeoQuizzrPic.png"
import FakeYoutubePic from "../assets/images/fakeYoutube.png"
import Project from "../components/Project"

export default function Projects() {
    
    const projects = {
        BrowserParty: {
            title: "Browser Party",
            description: "Browser Party is fully browser-based multiplayer party game platform that allows users to compete and chat with each other in real time using socket.io and React. This project was an absolute joy to make and I look forward to making more and more accessible games over the years to come.",
            awards: "Awards: Best Functionality",
            liveUrl: "https://browser-party.herokuapp.com/",
            github: "https://github.com/kingnolds/Browser-Party",
            featured:  true,
            pic: BrowserPic
        },
        Skyfall: {
            title: "Skyfall Travel",
            description: "Skyfall Travel was my first full-stack application. It utilizes a MYSQL database to enable users to plan, and save future trips to their account, including things like stops, dates, and budget breakdowns.",
            awards: "Awards: Best Overall and Best Functionality",
            liveUrl: "https://skyfall-travel.herokuapp.com/",
            github: "https://github.com/hcweigand10/SkyFall-Travel",
            featured: false,
            pic: SkyfallPic
        },
        DoschRealty: {
            title: "Dosch Realty",
            description: "React Website built for Bradley Dosch, a Seattle-based realtor. The site featues an elegant design and built in content manager for Brad to easily add and update blog posts.",
            awards: "",
            liveUrl: "https://profound-lollipop-4eb9d0.netlify.app/",
            github: "https://github.com/hcweigand10/fake-youtube",
            featured: false,
            pic: FakeYoutubePic
        },
        FakeYoutube: {
            title: "Fake Youtube",
            description: "I made this 'fake youtube' site using Youtube's open API, react class and function based components, and semantic UI styling.",
            awards: "",
            liveUrl: "https://main--majestic-mandazi-298247.netlify.app/",
            github: "https://github.com/hcweigand10/fake-youtube",
            featured: false,
            pic: FakeYoutubePic
        },
        eCommerce: {
            title: "eCommerce Backend",
            description: "This project was an exercise in setting up a backend for a potential eCommerce sight. I used MYSQL and an MVC architectural structure to enable fast and effortless database management",
            awards: "",
            liveUrl: "https://github.com/hcweigand10/ORM-eCommerce",
            github: "https://github.com/hcweigand10/ORM-eCommerce",
            featured: false,
            pic: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.business2community.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fecommerce.png&f=1&nofb=1"
        },
        GeoQuizzr: {
            title: "GeoQuizzr",
            description: "GeoQuizzr is a simple geography trivia site that will test you with needlessly difficult questions about our world's borders. This was my first coding project that I felt proud of!",
            awards: "",
            liveUrl: "https://hcweigand10.github.io/Geoquizzr/",
            github: "https://github.com/hcweigand10/Geoquizzr",
            featured: false,
            pic: GeoQuizzrPic
        },
    }
    
    return (
        <main className='my-4 mx-5 d-flex justify-content-center'>

            <div class="album py-5 col-xxl-10 col-xl-11">
                <div class="">
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                        <Project project={projects.BrowserParty}/>
                        <Project project={projects.Skyfall}/>
                        <Project project={projects.DoschRealty}/>
                        <Project project={projects.FakeYoutube}/>
                        <Project project={projects.eCommerce}/>
                        <Project project={projects.GeoQuizzr}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

