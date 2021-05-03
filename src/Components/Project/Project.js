import React from 'react';
import { Link } from 'react-router-dom';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

const Project = () => {
    const projects = [
        {
            name:'animal care ',
            detail: 'This is MERN Stack project and include user admin dashboard,  it is Fully responsive. A user can book various services for his pet if he wants',           
            img:'https://i.ibb.co/j4yhKbq/201.jpg',
            live:'https://dog-care-6c0d8.web.app/',
            repo:'https://github.com/miladsiddiquey/animal-care--dogger--client.git '
        },
        {
            name:'E-commerce site ',
            detail: 'This is a full-Stack E-commerce project. The user can buy any product and must login before buying the product',           
            img:'https://i.ibb.co/P1KgHxF/501.jpg',
            live:'https://rm-food.web.app/home',
            repo:'https://github.com/miladsiddiquey/rm-food-client.git'
        },
        {
            name:'Travelling site ',
            detail: 'Travel to a specific place and it helps to have a perfect tour of any city.This website Provides car, bus , train, motorcycle service for travel',
            img:'https://i.ibb.co/d6RvhSN/505.jpg',
            live:'https://rides-project.web.app/',
            repo:'https://github.com/miladsiddiquey/cholo-travelling-service.git'
        },
    ]
    return (
        <section className="container allSection" id="project">
            <div>
                <h1 style={{ fontSize: '55px', fontWeight: 'bold', textAlign: 'center' }}>Recent Projects</h1>
               
            </div>
            <div className="text-center">
            <Link to='/allProjects' className="  text-success "><h5>See all</h5></Link>
            </div>
            <div className="row d-flex justify-content-center">
                {
                    projects.map(project=> <ProjectInfo project={project}/>)
                }
            </div>
        </section>
    );
};

export default Project;