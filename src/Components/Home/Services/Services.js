import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whiteing.png'
import ServiceDatile from '../ServiceDateil/ServiceDatile';

const Services = () => {

    const servicesData = [

        {
            name: 'Fluoride Treatment',
            image: fluoride
        },
        {
            name: 'Cavity Filling',
            image: cavity
        },
        {
            name: 'Teeth Whitening',
            image: whitening
        }
    ]
    return (


        <div className='d-flex justify-content-center'>
            <div className='w-75 row'>
                <div className='text-center mt-5 mb-5'>
                    <h4 style={{ color: '#5FC7C7' }} className='mb-2'>Our Services</h4>
                    <h2 style={{ color: '#3A4256' }}>Services We Provide</h2>
                </div>

                <div className='row  mb-3'>
                    {
                        servicesData.map(service => <ServiceDatile service={service}></ServiceDatile>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;