import React from 'react';
import wilson from '../../../images/Ellipse 1.png'
import BlogDateil from '../BlogDateil/BlogDateil';

const Blog = () => {
    const blogData = [
        {
            title : 'Check at least a doctor in a year for your teeth',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Cudi',
            authorImg : wilson,
            date : '23 April 2019'
        },
        {
            title : 'Two time brush in a day can keep you healthy',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Sinthia',
            authorImg : wilson,
            date : '23 April 2019'
        },
        {
            title : 'The tooth cancer is taking a challenge',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Cudi',
            authorImg : wilson,
            date : '23 April 2019'
        },
    ]
    return (  
        <div className='d-flex justify-content-center'>
            <div className='w-75 row'>
                <div className='text-center mt-5 mb-5'>
                    <h4 style={{ color: '#5FC7C7' }} className='mb-2'>Our Blogs</h4>
                    <h1 style={{ color: '#3A4256' }}>From Our Blogs News</h1>
                </div>

                <div className='row my-5'>
                    {
                    blogData.map(post => <BlogDateil post={post}></BlogDateil>)   
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;