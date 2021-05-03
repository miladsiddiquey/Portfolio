import React from 'react';
import './Header.css';
import Typical from 'react-typical';
import NavTop from '../NavTop/NavTop';


const Header = () => {
    return (
        <div className="header-container">
            <div className="container ">
                <NavTop />
                <main style={{ height: '600px' }} className="row d-flex align-items-center ">
                    <div className="col-md-7 col-sm-12 ">
                        <h1 style={{ color: 'white', fontSize: '55px', fontWeight: 'bold' }} >Hi!,<br />I'am <span className="title-span">Milad</span> Siddiquey</h1>
                        <h3 className="text-white">
                            <Typical
                                steps={['Web Developer', 1000, 'React Developer', 1000,'MERN Stack Developer', 1000,'Front-End Developer', 1000]}
                                loop={Infinity}
                                wrapper="p"
                            />



                        </h3><br />
                        <a target="_blank" href="https://www.linkedin.com/in/miladsiddiquey/" className="btn btn-success mr-3">Hire me</a>

                        <a target="_blank" href="https://drive.google.com/uc?export=download&id=1NB3NdcwS8OApQtrVUeuWGFJFR3ghYE6e"><button className="btn btn-outline-success ">Download Resume</button></a>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <img className="img-fluid d-none d-lg-block" src="https://i.ibb.co/HxxdSMv/IMG-20210430-153326.png" alt="" />
                    </div>
                </main>

            </div>
        </div>
    );
};

export default Header;