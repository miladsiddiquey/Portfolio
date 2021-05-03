import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const About = () => {
    return (
        <div className="container " id="about">
            <div>
                <h1 style={{ fontSize: '55px', fontWeight: 'bold', textAlign: 'center' }}>About Me</h1>
            </div>
            
            <div className="row">
                <div className="col-md-6 col-sm-12" data-aos="fade-right" >
                    <img src="https://i.ibb.co/PhRYBbd/about-c07f3d2b.png" className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 col-sm-12 mt-5" data-aos="fade-left" >
                    <h1>I'm a <br />MERN Stack web developer </h1>
                    <br />


                    <p>Hi, I'm Milad Siddiquey, a web developer. A self-motivated and enthusiastic web developer with a deep interest in JavaScript. I can create modern & responsive web sites/applications with high quality and professional look. As every website/application that represents a business plays a very important role in its growth. That's why I treat every website according to its nature.</p>
                    <a href="#contact" className="btn btn-success">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default About;