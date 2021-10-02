import React from 'react';
import sinthia from '../../../images/doctor-sm.png'
import DoctorsDatile from '../DoctorsDatile/DoctorsDatile';

const Doctors = () => {

    const doctorData =[
        {
            Name:'Dr. Sinthia',
            phone: '+0601156287367',
            image: sinthia,
        },
        {
            Name:'Dr. Sinthia',
            phone:'+0601156287367',
            image: sinthia,
        },
        {
            Name:'Dr. Sinthia',
            phone:'+0601156287367',
            image: sinthia,
        },
    ]
    return (
        <div className='d-flex justify-content-center'>
        <div className='w-75 row mt-5 mb-5'>
            <div className='text-center mt-5'>
                <h4 style={{ color: '#5FC7C7' }} className=' fw-bold'>Our Doctors</h4>
            </div>

            <div className='row  mb-3 mt-5'>
                {
                    doctorData.map(info => <DoctorsDatile infos={info}></DoctorsDatile>)
                }
            </div>
        </div>
    </div>
    );
};

export default Doctors;