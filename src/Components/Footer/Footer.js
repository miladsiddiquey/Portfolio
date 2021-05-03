import React from 'react';

const Footer = () => {
    return (
        <div className="text-center " style={{backgroundColor:'#0B0952',padding:'10px',color:'white'}}>
             &copy; {new Date().getFullYear()} Copyright: <a href="https://www.linkedin.com/in/miladsiddiquey/">Milad Siddiquey</a>
        </div>
    );
};

export default Footer;