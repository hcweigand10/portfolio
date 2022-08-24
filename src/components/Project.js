import React from "react";

const Project = ({ project }) => {
  if (project.featured) {
    return (
      <div className="col mb-4">
        <div
          className="card project-card h-100"
          style={{ minHeight: "250px" }}
        >
          <div className="row h-100">
            <div className="col-md-7">
              <img
                src={project.pic}
                alt="project thumbnail"
                style={{ width: "100%", height:"100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-5 my-auto">
              <div className="p-3 card-body">
                <h2 style={{ fontWeight: "bold", color: "black" }}>
                  {project.title}
                </h2>
                <p className="text-muted">{project.description}</p>
                {project.awards ? (
                  <p
                    class="card-text text-muted mb-4"
                    style={{ fontStyle: "italic" }}
                  >
                    Awards: {project.awards}
                  </p>
                ) : null}
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <a
                      class="btn btn-1 m-2"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>
                    <a
                      class="btn btn-2 m-2"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="col-md-6 col-lg-4">
        <div class="card my-3">
          <img
            src={project.pic}
            style={{ height: "200px", width: "100%", objectFit: "cover" }}
            alt="project thumbnail"
          />
          <div class="card-body">
            <div style={{ minHeight: "190px" }}>
              <h3 className="card-title">{project.title}</h3>
              <p class="card-text mb-4 text-muted">{project.description}</p>
              {project.awards ? (
                <p
                  class="card-text mb-4 text-muted"
                  style={{ fontStyle: "italic" }}
                >
                  Awards: {project.awards}
                </p>
              ) : null}
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <div>
                <a
                  class="btn btn-1 m-2"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
                </a>
                <a
                  class="btn btn-2 m-2"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
              </div>
            </div>
            {project.featured ? (
              <span className="justify-content-end">
                <p
                  class="text-danger"
                  style={{
                    fontStyle: "italic",
                    textAlign: "center",
                    fontSize: "20px",
                    position: "absolute",
                    top: "-30px",
                    left: "0",
                    right: "0",
                    margin: "auto",
                  }}
                >
                  Featured!
                </p>
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
};

export default Project;
