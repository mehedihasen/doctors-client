import React from 'react';
import ExceptionalImg from '../../../images/Exceptional.png'

const Exceptional = () => {
    return (
        <div className='d-flex justify-contain-center offset-1 mt-5 mb-5'>
            <div className="row w-75">
                <div className='col-md-6'>
                    <img src={ExceptionalImg} alt="" className="img-fluid" />
                </div>
                <div className='col-md-6'>
                    <h1 className='mt-3 mb-3' style={{color:'#3A4256'}}>Exceptional Dental <br /> On Your Terms</h1>
                    <h3 className='text-secondary '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste culpa ipsam tempore! Totam accusamus sapiente assumenda ullam voluptate illum possimus. Eaque tenetur provident nisi. Sequi eaque suscipit reiciendis nesciunt amet debitis sint inventore maxime, veniam excepturi facere </h3>
                    <button className="btn btn-primary mt-5 p-2">Learn more</button>
                </div>

            </div>
        </div>

    );
};

export default Exceptional;