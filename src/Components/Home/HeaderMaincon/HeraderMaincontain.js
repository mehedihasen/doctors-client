import React from 'react';
import chear from '../../../images/chear.png'

const HeraderMaincontain = () => {
    return (
        <main style={{height:'600px'}} className ="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your smile <br /> Starts Here</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui, explicabo expedita obcaecati tenetur corrupti.</p>
                <button className="btn btn-primary">Get appointment
                </button>
            </div>
            <div className="col-md-6">
            <img src={chear} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeraderMaincontain;