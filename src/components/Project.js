import React from "react"

const Project = ({title,projectObj,pic}) => {

    return (
        <div className="item">
            <div className="work-wrap d-md-flex">
                <div className="text text-left text-lg-right p-4 px-xl-5 d-flex align-items-center">
                    <div className="desc row w-100">
                        <div className='col-lg-4'>
                            <h2 className="mb-4">{title}</h2>

                            <div className="row">
                                <div>
                                    <p className="plain-text">{projectObj.description}</p>
                                    <p className="plain-text">{projectObj.awards}</p>
                                </div>
                            </div>
                            <p className='mt-4 project-buttons'>
                                <a href={projectObj.liveUrl} target="_blank" rel="noreferrer" className="btn-1 m-2 py-3 px-4">Deployed Site</a>
                                <a href={projectObj.github} target="_blank" rel="noreferrer" className="btn-2 m-2 py-3 px-4">Github Repo</a>
                            </p>
                        </div>
                        <img className="col-lg-8" src={pic} alt={title} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project