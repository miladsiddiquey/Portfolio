import React from 'react';

const ProjectInfo = ({ project }) => {
    return (
        <div className="col-md-4 d-flex justify-content-center mt-5">
            <div className="card cardStyle shadow p-3 mb-3 bg-body rounded" style={{width: '23rem'}}>
                <img src={project.img} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.detail}</p>
                        <a href={project.live} className="btn btn-outline-success mr-3">Live site</a>
                        <a href={project.repo} className="btn btn-outline-success">Repository</a>
                    </div>
                </div>
            </div>
    );
};

export default ProjectInfo;