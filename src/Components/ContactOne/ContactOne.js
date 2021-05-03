import React from 'react';
import './ContactOne.css';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ContactOne = () => {

    const MySwal = withReactContent(Swal)

    function sendEmail(e){
        e.preventDefault();

        emailjs .sendForm('gmail', 'template_6ijkc2w', e.target, 'user_TNQIjGJKb07VNHYu2GCET')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    //   alert('message send successful')
    MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        didOpen: () => {
          // `MySwal` is a subclass of `Swal`
          //   with all the same instance & static methods
          MySwal.clickConfirm()
        }
      }).then(() => {
        return MySwal.fire(
        <p>Thank You</p>,
        <p>your message send successful </p>
            )
      })
    }

    return (
        <div className="mt-5">
            <div className="content-block " id="contact">
                <div className="overlay-3">
                    <header className="block-heading cleafix text-center">
                        <h1 className="mb-5">Get In Touch</h1>

                    </header>
                    <div className="block-content text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 wow animated fadeInLeft">
                                    <form onSubmit= {sendEmail} className="contact-form" >
                                        <input type="text" name="name" placeholder="Name" required />
                                        <input type="email" name="email" placeholder="Email" required />
                                        <input type="text" name="subject" placeholder="Subject" required />
                                        <textarea rows="5" name="message" placeholder="Say Something..." required></textarea>
                                        <input type="submit" value="Send message" />
                                    </form>
                                </div>
                                <div className="col-md-6 wow animated fadeInRight">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="contact-info">
                                                <div className="clearfix">
                                                    <div className="rotated-icon">
                                                        <div className="sqaure-nebir"></div>
                                                        
                                                       
                                                    </div>
                                                    <p><strong> Address:</strong> Shibganj, Sylhet-3100, Bangladesh
                                                </p>
                                                </div>
                                                <div className="clearfix">
                                                    <div className="rotated-icon">
                                                        <div className="sqaure-nebir"></div>
                                                        <i className="fa fa-mobile"></i>
                                                    </div>
                                                    <p><strong> Cell No:</strong> +8801799748096 </p>
                                                </div>
                                                <div className="clearfix">
                                                    <div className="rotated-icon">
                                                        <div className="sqaure-nebir"></div>
                                                        <i className="fa fa-envelope-o"></i>
                                                    </div>
                                                    <p>
                                                        <strong> Email:</strong> miladsiddiquey@gmail.com
                                                </p>
                                                
                                                </div>
                                            </div>
                                        </div>                                  
                                    </div>                                   
                                    <div className="row ">                                   
                                        <ul className="social-box">
                                            <li><a className="facebook-icon" target="_blank" href="https://www.facebook.com/Siddiqueymilad"> <FontAwesomeIcon icon={faFacebook} style={{fontSize:'30px'}} /></a></li>
                                            <li><a className="github-icon" target="_blank" href="https://github.com/miladsiddiquey"><FontAwesomeIcon icon={faGithub} style={{fontSize:'30px'}} /></a></li>
                                            <li><a className="linkedin-icon" target="_blank" href="https://www.linkedin.com/in/miladsiddiquey/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize:'30px'}} /></a></li>
                                            <li><a className="medium-icon" target="_blank" href="#"><FontAwesomeIcon icon={faMedium} style={{fontSize:'30px'}} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default ContactOne;