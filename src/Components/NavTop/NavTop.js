import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const NavTop = () => {
    return (
        <Navbar  expand="lg" style={{backgroundColor:'#0B0952'}}>
            <div className="container">
            <Navbar.Brand  style={{color:'white',fontSize:'35px'}} to="/home">Milad</Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav" style={{backgroundColor:'white'}} />
            <Navbar.Collapse  id="basic-navbar-nav" >
                <Nav className="ml-auto">
                    <Link className='nav-link mr-5 text-white' to="/home">Home</Link>
                    <a className='nav-link mr-5 text-white' href="#about">About</a>
                    <a className='nav-link mr-5 text-white' href="#project">Project</a>
                    <a className='nav-link mr-5 text-white' href="#blog">Blogs</a>
                    <a className='nav-link mr-5 text-white' href="#contact">Contact</a>
                    
                    
                    
                    
                </Nav>
               
            </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavTop;