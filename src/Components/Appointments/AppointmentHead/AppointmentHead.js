import React from 'react';
import chear from '../../../images/chear.png';
import './appointmentHead.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


const AppointmentHead = ({handelDateChange}) => {
  
    return (
        <main style={{height:'600px'}} className ="row d-flex align-items-center set-bg">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}} className='text-center fw-bold '>Appointment</h1>
                <div>
      <Calendar
        onChange={handelDateChange}
        value={new Date()}
      />
    </div>
                
            </div>
            <div className="col-md-6">
            <img src={chear} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHead;