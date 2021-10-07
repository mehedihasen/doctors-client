import React from 'react';
import Doctor from '../../../images/appointmentD.png'
import './appointment.css'

const Appointment = () => {
    return (
        <div className='bg-appoint'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={Doctor} alt="" className="img-fluid doctor" />
                    </div>
                    <div className="col-md-6 text-white py-5 index">
                        <h3 className='text-uppercase text-primary'>Appointment</h3>
                        <h1 className='my-4'>Make an Appointment <br /> Today</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias consequatur assumenda quas ratione consequuntur eius.
                        </p>
                        <button className="btn btn-brand text-uppercase">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;