import React from 'react';
import './signup.css'
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

export default function Signup() {
    return (
        <>

            <section className='signup-hero d-flex align-items-center justify-content-center py-sm-4'>
                <div className="container-fluid d-flex align-items-center justify-content-center ">
                    <div className="container ">
                        <div className="row sign-row justify-content-sm-between justify-content-center
                         align-items-center ">
                            <div className="col-lg-6 col-sm-5 text-sm-start text-center ">
                                <h1 className='py-sm-2' style={{ color: 'var(--bs-second)', fontSize: '46px' }}>Create Impressive
                                    <br></br>
                                    <span style={{ color: 'var(--bs-third)' }}>Resumes in Minutes</span>
                                </h1>
                                <p className='pt-sm-4 pb-sm-0 pb-4' style={{ color: 'var(--bs-second)' }}>Sign in to your CV builder account to create a professional-looking CV in minutes.
                                    Our easy-to-use tool has everything you need to create a CV that will impress potential
                                    employers. Simply enter your contact information, education, work experience, and
                                    skills, and our tool will generate a CV that is tailored to your specific needs.</p>

                            </div>
                            <div className="col-lg-5 col-sm-6 col-11 py-sm-4 py-5" style={{ background: 'var(--bs-second)', borderRadius: '15px' }}>
                                <form className="row g-3 justify-content-center needs-validation p-sm-4 my-sm-4" novalidate>
                                    <div className="col-md-6 mb-2">
                                        <input type="text" className="form-control custom-input" id="validationTooltip02" placeholder="Name" required />
                                        <div className="valid-tooltip">
                                            Looks good!
                                        </div>
                                        <div className="invalid-tooltip">
                                            Please enter your Name.
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className="input-group has-validation">
                                            <input type="text" className="form-control custom-input" id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend" placeholder='Email' required />
                                            <div className="invalid-feedback">
                                                Please enter a email.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-sm-4 mb-sm-2">
                                        <input
                                            type="password"
                                            className="form-control custom-input"
                                            id="validationTooltip03"
                                            placeholder="Password"
                                            required
                                        />
                                        <div className="valid-tooltip">
                                            Looks good!
                                        </div>
                                        <div className="invalid-tooltip">
                                            Password must be at least 6 characters long.
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-sm-4">
                                        <input
                                            type="password"
                                            className="form-control custom-input"
                                            id="validationTooltip03"
                                            placeholder="Confirm password"
                                            required
                                        />
                                        <div className="valid-tooltip">
                                            Looks good!
                                        </div>
                                        <div className="invalid-tooltip">
                                            Password must be at least 6 characters long and match the confirm password.
                                        </div>


                                    </div>



                                    <div className="col-12 d-flex justify-content-center">
                                        <button type="button" className="contbtnsign mt-sm-3  mb-sm-2">Sign up</button>

                                    </div>
                                    <div className="col-md-12">
                                        <p>Have an account?
                                            <Link to='/login' className='ps-1'>
                                                login
                                            </Link>
                                        </p>
                                    </div>
                                    <div className='col-md-12 mt-0'>
                                        <p>or signup with</p>
                                    </div>
                                    <div className="row pt-sm-2  justify-content-center ">
                                        <div className="col-3 ">
                                            <div className="row justify-content-center">
                                                <div className="d-flex justify-content-center border border-2
                                                icon-hover">
                                                    <FaGoogle className='googleicons' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-3 ">
                                            <div className="row justify-content-center  ">
                                                <div className="d-flex justify-content-center border border-2
                                                icon-hover">
                                                    <FaFacebookF className='googleicons' />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-3 ">
                                            <div className="row justify-content-center  ">
                                                <div className="d-flex justify-content-center border border-2
                                                icon-hover">
                                                    <IoLogoTwitter className='googleicons' />
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
