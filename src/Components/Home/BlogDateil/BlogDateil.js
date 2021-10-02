import React from 'react';
import './blog.css'

const BlogDateil = ({ post }) => {
    return (
        <div className='d-flex justify-content-center col-md-4 blog card shadow-sm'>
            <div className='blog-body mx-5'>
                <div className='d-flex align-items-center'>
                    <img src={post.authorImg} alt="" className="img-fluid me-4 mt-3" width='100px' />
                    <div className='mt-5'>
                        <h5 className='fw-bold'>{post.author}</h5>
                        <small className='text-secondary mt-0'>{post.date}</small>
                    </div>
                </div>

                <div className=''>
                    <h5 className='my-5 fw-bold'>{post.title}</h5>
                    <p className='text-secondary'>{post.description}</p>
                </div>

            </div>
        </div>
    );
};

export default BlogDateil;