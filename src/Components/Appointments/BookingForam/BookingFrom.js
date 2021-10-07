import React from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        opacity: '0.9 bla',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    },
};

Modal.setAppElement('#root');
const BookingFrom = ({ close, open, date, info }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.service = info;
        data.date = date;
        data.created = new Date();
        
        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.text())
        .then(success => {
            if(success){
                close();
                console.log('appoint successfully');
            }
        })
    }

    return (
        <div>
            <Modal
                isOpen={open}
                // onRequestClose={open}
                style={customStyles}
                contentLabel="Example Modal">
                <h2 className="text-center text-brand">{info.subject}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>

                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input {...register("name", { required: true })} className='form-control' placeholder='Your name' type='text' name='name' />
                        {/* errors will return when field validation fails  */}
                        {errors.name && <span className='text-danger'>This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input {...register("email", { required: true })} className='form-control' placeholder='Your email' type='email' name='email' />
                        {errors.email && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className="from-group row">
                    <div className=" col-4">
                        <select {...register("gender")} className="form-select form-control" aria-label="Default select example" name='gender'>
                            <option value='Not-set' >Gender</option>
                            <option value="female">Female</option>
                            <option value="male">male</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <span className='text-danger'>This field is required</span>}

                    </div>
                    <div className="col-4">
                        <input {...register("age", { required: true })} className='form-control' placeholder='Your age' type='number' name='age' />
                        {errors.age && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className="col-4">
                        <input {...register("weight", { required: true })} className='form-control' placeholder='Your weight' type='number' name='weight' />
                        {errors.weight && <span className='text-danger'>This field is required</span>}
                    </div>
                    </div>
                    

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand text-uppercase">Send</button>
                    </div>

                </form>


                {/* <button onClick={close}>close</button> */}

            </Modal>
        </div>
    );
};

export default BookingFrom;