import React from 'react';
import winson1 from '../../../images/Ellipse 1.png'
import winson2 from '../../../images/Ellipse 2.png'
import winson3 from '../../../images/Ellipse 3.png'
import TestionialDateil from '../TestimonialDateil/TestimonialDateil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft}from '@fortawesome/free-solid-svg-icons';
import './testimonial.css';

const Testimonial = () => {

    const TestiData = [
        {
            name: 'Winson hearry',
            city: 'Celifonia',
            image: winson1,
            Comment: 'it is a log established facr that by the readable content of a lot layout. the point of using Lorem a more -or- less normal distribu to using Content',
        },

        {
            name: 'Winson hearry',
            city: 'Celifonia',
            image: winson2,
            Comment: 'it is a log established facr that by the readable content of a lot layout. the point of using Lorem a more -or- less normal distribu to using Content',
        },

        {
            name: 'Winson hearry',
            city: 'Celifonia',
            image: winson3,
            Comment: 'it is a log established facr that by the readable content of a lot layout. the point of using Lorem a more -or- less normal distribu to using Content',
        }
    ]
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='w-75 row'>
                <div className='d-flex'>
                    <div class='col-md-10'>
                        <h4 className='text-uppercase text-primary pt-5'>testimonial</h4>
                        <h1 className='mt-3'>What's Our Patients<br /> Says</h1>
                    </div>
                    <div class='col-md-2'>
                    <FontAwesomeIcon icon={faQuoteLeft} className='icon' />
                    </div>
                </div>

                <div className='row  mb-3'>
                    {
                        TestiData.map(info => <TestionialDateil info={info}></TestionialDateil>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;