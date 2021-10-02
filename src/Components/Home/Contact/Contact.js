import React from 'react';
import './contact.css'

const Contact = () => {
    return (
        <section className="style my-5 py-5">
            <div className="container">
                <div className="head text-center text-white mb-5">
                    <p className="fw-bold text-uppercase text-primary">contact us</p>
                    <h1 className="my-2 fw-bold">Always Contact With Us </h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div class="form-group">
                            <input type="text" class="form-control p-4" id="formGroupExampleInput2" placeholder="Another input"></input>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control mt-5 p-4" id="formGroupExampleInput2" placeholder="Another input"></input>
                        </div>
                        <div class="form-group">
                            <textarea name="" id="" placeholder='write your word' cols="30" rows="10" class="form-control mt-5 p-4"></textarea>
                        </div>
                        <div className="form-group text-center mt-3 ">
                           <button type="button" className="btn btn-primary py-3 px-5 text-uppercase"> Submit </button>
                       </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;