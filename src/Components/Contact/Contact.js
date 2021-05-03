import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';


import NavTop from '../NavTop/NavTop';



const Contact = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs .sendForm('gmail', 'template_6ijkc2w', e.target, 'user_TNQIjGJKb07VNHYu2GCET')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert('message send successful')
    }

    return (
        <div>
            <NavTop />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 contact-form ">
                        <form onSubmit= {sendEmail} >
                            <div class="form-group mb-3">
                                <input type="text" class="form-control" placeholder="Full Name" name="name" />
                            </div>
                            <div class="form-group mb-3">
                                <input type="email" class="form-control" placeholder="Email" name="email" />
                            </div>
                            <div class="form-group mb-3">
                                   <input type="text" class="form-control" placeholder="Subject" name="subject" />
                            </div>
                            <div class="form-group mb-3">
                                <textarea type="text" class="form-control" cols="30" rows="8" placeholder="Your message" name="message" />
                            </div>
                            <div class="form-group mb-3">
                                <input type="submit" class="btn btn-success" value="Send Message" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 mt-5">
                        <h4>Address: Shibgonj, Sylhet-3100, Bangladesh</h4>
                        <h4>Phone: +8801799748096</h4>
                        <h4>Email: miladsiddiquey@gmail.com</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;