import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Project/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default Home;