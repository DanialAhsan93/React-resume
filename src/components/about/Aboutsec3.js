import React from 'react';
import img1unsplash from '../images/img1unsplash.png';
import imageabt1 from '../images/imageabt1.webp'
import './aboutsec3.css';
import { Link } from 'react-router-dom';

export default function Aboutsec3() {
    return (
        <>
            <section style={{ background: 'var(--bs-primary)', zIndex: -1 }}>
                <div className="container-fluid py-md-5 py-5" style={{ background: 'var(--bs-second)', borderTopLeftRadius: '90px' }}>
                    <div className="container py-md-5">
                        <div className="row py-md-5 row-about3 justify-content-between">
                            <div className="col-md-5 text-sm-start pb-sm-0 pb-5 text-center d-flex align-items-center ">
                                <div className="row " style={{ color: 'var(--bs-primary)' }}>
                                    <h1 className='pb-md-2' >About Us</h1>
                                    <p style={{ fontWeight: '500' }}>Our platform equips you with the necessary resources, expert guidance, and valuable insights
                                        to empower your career development and achieve success.
                                    </p>
                                    <div className="col">
                                        <Link to='/CV'>
                                            <button type="button" className="contbtnbanner2 mt-sm-3  mb-sm-2">
                                                Build Resume
                                            </button>
                                        </Link>

                                    </div>
                                </div>


                            </div>
                            <div className="col-md-5 px-md-5">
                                <div className='img-about3'>
                                    <img src={imageabt1} alt="#" className='img-abt' />
                                    <div className='abt-empty'></div>
                                    <div className='abt-empty2'></div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
