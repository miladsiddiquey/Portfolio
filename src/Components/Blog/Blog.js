import React from 'react';
import BlogInfo from '../BlogInfo/BlogInfo';

const Blog = () => {
    const blogs = [
        {
            name:'animal care ',
            detail: 'A NextJs web app where people can order home related service',
            img:'https://i.ibb.co/PhRYBbd/about-c07f3d2b.png'
        },
        {
            name:'animal care ',
            detail: 'A NextJs web app where people can order home related service',
            img:'https://i.ibb.co/PhRYBbd/about-c07f3d2b.png'
        },
        {
            name:'animal care ',
            detail: 'A NextJs web app where people can order home related service',
            img:'https://i.ibb.co/PhRYBbd/about-c07f3d2b.png'
        },
    ]
    return (
        <section className="container allSection" id="blog">
            <h1 style={{ fontSize:'55px',fontWeight:'bold',textAlign:'center' }}> Featured Blogs </h1>
            <div className="row">
                {
                    blogs.map(blogs => <BlogInfo blogs={blogs}></BlogInfo> )
                }
            </div>
        </section>
    );
};

export default Blog;