import React from 'react';

const ServiceDatile = ({service}) => {
    return (
        <div className ='d-flex justify-content-center col-md-4'>
           <div className='text-center p-4'>
           <img src={service.image} alt="" className="img-fluid" width='40px' />
            <h4 className='mt-3 mb-3 text-secondary'>{service.name}</h4>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloribus?</p>
           </div>
        </div>
    );
};

export default ServiceDatile;
