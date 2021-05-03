import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import ContactOne from '../ContactOne/ContactOne';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Project from '../Project/Project';


const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Project/>
            <Blog/>
            <ContactOne/>
            <Footer/>
        </div>
    );
};

export default Home;