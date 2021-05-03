import React from 'react';

const AllProjectsInfo = ({allProjects}) => {
    return (
        <div className="col-md-4 d-flex justify-content-center mt-5"data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <div className="card cardStyle shadow p-3 mb-3 bg-body rounded" style={{width: '23rem'}}>
            <img src={allProjects.img} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{allProjects.name}</h5>
                    <p className="card-text">{allProjects.detail}</p>
                    <a href={allProjects.live} className="btn btn-outline-success mr-3">Live site</a>
                    <a href={allProjects.repo} className="btn btn-outline-success">Repository</a>
                </div>
            </div>
        </div>
        
    );
};

export default AllProjectsInfo;