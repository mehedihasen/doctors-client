import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHead from '../AppointmentHead/AppointmentHead';
import AvaliableAppoint from '../AvaliableAppointment/AvaliableAppoint';

const Appointment = () => {
    const [seletedDate, setSeletedDate ] = useState(new Date());

    const handelDateChange = date => {
        setSeletedDate(date)
    }

    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHead handelDateChange ={handelDateChange} ></AppointmentHead>
            <AvaliableAppoint date ={seletedDate}></AvaliableAppoint>
            <Footer></Footer>
 
        </div>
    );
};

export default Appointment;