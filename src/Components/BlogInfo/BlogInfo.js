import React from 'react';

const BlogInfo = ({blogs}) => {
    return (
        <div className="col-md-4 d-flex justify-content-center mt-5 " data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" >
            <div className="card cardStyle shadow p-3 mb-3 bg-body rounded" style={{width: '20rem'}}>
                <img src={blogs.img} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{blogs.name}</h5>
                        <p className="card-text">{blogs.detail}</p>
                        <a href="#" className="btn btn-outline-dark">Read</a>
                    </div>
                </div>
            </div>
    );
};

export default BlogInfo;