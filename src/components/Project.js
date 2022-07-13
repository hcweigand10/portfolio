import React from "react"

const Project = ({project}) => {

    return (
        <div class="col">
            <div class={project.featured ? "card shadow-lg" : "card shadow"}>
                <img src={project.pic} style={{height: "200px"}} alt="project thumbnail"/>
                <div class="card-body bg-light">
                    <div style={{minHeight: "190px"}}>
                        <h3 className="card-title">{project.title}</h3>
                        <p class="card-text mb-4">{project.description}</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <a class="btn btn-1 m-2" href={project.liveUrl} target="_blank" rel="noreferrer">Live Site</a>
                            <a class="btn btn-2 m-2" href={project.github} target="_blank" rel="noreferrer">Github Repo</a>      
                        </div>
                    </div>
                    {project.featured ? <span className="justify-content-end"><p class="text-danger" style={{fontStyle: "italic", textAlign: "center", fontSize: "20px", position: "absolute", top: "-30px", left: "0", right: "0", margin: "auto",}}>Featured!</p></span> : null}
                </div>
            </div>
        </div>
    )
}

export default Project