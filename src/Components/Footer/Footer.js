import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <MDBFooter  className="page-footer  font-small pt-4 mt-4">
            
            
            <div className="text-center">
                <h3 className=" font-weight-bold ">FOLLOW US</h3>
                <ul className="list-unstyled list-inline mt-5">
                    <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-gplus mx-1">
                        <FontAwesomeIcon icon={faFacebook} style={{fontSize:'40px'}} />
                        </a>
                    </li>
                    <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-gplus mx-1">
                        <FontAwesomeIcon icon={faLinkedin} style={{fontSize:'40px',color:'#0A66C2'}} />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-gplus mx-1">
                        <FontAwesomeIcon icon={faGithub} style={{fontSize:'40px', color:'black'}} />
                        </a>
                    </li>
                    <li className="list-inline-item">
                    <a className="btn-floating btn-sm btn-gplus mx-1">
                        <FontAwesomeIcon icon={faMedium} style={{fontSize:'40px',color:'#0BDC6D'}} />
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.linkedin.com/in/miladsiddiquey/">Milad Siddiquey</a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
};

export default Footer;