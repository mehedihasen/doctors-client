import React, { useState } from 'react';
import BookingFrom from '../BookingForam/BookingFrom';

const AppointmentCard = ({data, date}) => {
    const [modalIsOpen, setIsOpen] = useState (false);
    function openModal() {
        setIsOpen(true);
      }
      
      function closeModal() {
        setIsOpen(false);
      }
    return (
   <div className=' col-md-4 '>
            <div className="card mb-5 shadow rounded" >
            <div className="card-body text-center">
                <h4 className='text-brand text-primary'>{data.subject} </h4>
                <h6>{data.visitingHour} </h6>
                <small><p> Available spas :-{data.totalSpace}</p> </small>
                <button onClick={openModal} className="btn btn-brand text-uppercase" >Book Appointment</button>
                <BookingFrom open={modalIsOpen} close ={closeModal} date={date} info={data} ></BookingFrom>



            </div>
            
        </div>
   </div>
    );
};

export default AppointmentCard;