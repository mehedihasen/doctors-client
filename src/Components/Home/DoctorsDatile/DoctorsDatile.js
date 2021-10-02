import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const DoctorsDatile = ({ infos }) => {
    return (
        <div className='d-flex justify-content-center col-md-4'>
            <div className='text-center'>
                <div>
                <img src={infos.image} alt="" className="img-fluid" width='100%' />
                </div>
            <div className=''>
            <h5 className='mt-2 mb-0 fw-bold'>{infos.Name}</h5>
            <div className='d-flex justify-content-center text-center mt-0 pt-0'>
                    <FontAwesomeIcon icon={faPhoneAlt} style={{color:'#5FC7C7'}}></FontAwesomeIcon>
                    <small className='text-secondary text-secondary'>{infos.phone}</small>
                </div>
            </div>
            </div>
        </div>

    );
};

export default DoctorsDatile;