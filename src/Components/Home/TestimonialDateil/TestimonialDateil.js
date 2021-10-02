import React from 'react';
import './testimonialDetail.css'
const TestimonialDateil = ({ info }) => {
    return (
            <div className='d-flex justify-content-center col-md-4 mt-5 p-t-5 '>
            <div className='card'>
                <div>
                <p className='text-secondary text-center'> {info.Comment}</p>
                </div>

                <div className='d-flex justify-content-center mt-3'>
                    <div className='me-2 mt-3'>
                        <img src={info.image} alt="" className="img-fluid" width='100px' />
                    </div>

                    <div className='mt-4'>
                        <h5 className='text-primary'>{info.name}</h5>
                        <small className='text-secondary'>{info.city}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDateil;