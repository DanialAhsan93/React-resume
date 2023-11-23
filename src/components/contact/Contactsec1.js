import React from 'react';
import './contactsec1.css';
import { Link } from 'react-router-dom';
export default function Contactsec1() {
    return (
        <>
            <section>
                <div className="container-fluid-py-md-5 contactsec1-bg">
                    <div className="container py-md-5 ">
                        <div className="row py-md-5 cont-inner">
                            <div className="col text-center">
                                <h1 className='cont-head1 py-md-4 py-sm-4 py-4'>Contact Us |
                                    <span className='cont-head2'> React Resume</span>
                                </h1>
                                <p className='py-md-3 text-light m-md-auto cont-p1'>
                                    Exceptional resume guidance and exceptional customer support. We take great pride in assisting you throughout the entire process.
                                </p>
                                <Link to='/template'>
                                    <div className='pt-md-5 pt-sm-4 pb-sm-0 pt-3 pb-4'>
                                        <button type="button" className="contbtn ">Visit template</button>
                                    </div>
                                </Link>


                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
