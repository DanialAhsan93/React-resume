import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Button from '../Navbar/Button';
import login1 from '../images/login1.png';
import navlogo from '../images/navlogo.png';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import './login.css'
import { useFormik } from 'formik';
import { contactsec2Schema } from '../schemas';


const initialValues = {
    email: "",
    password: "",

}
export default function Login() {
    const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik(
        {
            initialValues: initialValues,
            validationSchema: contactsec2Schema,
            onSubmit: (values) => {
                console.log(values)
            }

        }
    )

    const mystyle1 = () => {
        return {
            paddingTop: '10px'


        }
    }

    return (
        <>
            <div className="main-container">
                <div className="container-login">
                    <div className="row justify-content-sm-between justify-content-center">
                        <div className="col-sm-6 bgimg">
                            <div className="box">
                                <div className="card-detail text-sm-start text-center">
                                    <h1 className='pb-sm-0 pb-4'>Join our community</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, suscipit, soluta necessitatibus cupiditate dolor numquam ut tenetur ea, fuga hic esse blanditiis cumque placeat sunt accusamus deserunt vero voluptates atque.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-5 px-0 pt-sm-4 py-sm-0 py-4 px-sm-0 px-3" style={{ background: 'var(--bs-second)' }}>
                            <div className="form-head">
                                <div className="d-flex flex-wrap justify-content-sm-start justify-content-center">
                                    <h1 className="form-log">Hello ! Welcome Back</h1>
                                </div>
                                <div className="d-flex flex-wrap justify-content-sm-start justify-content-center">
                                    <p className="para-log">login to continue</p>
                                </div>
                            </div>


                            <div className="col-md-10">
                                <form className="row g-3 needs-validation justify-content-center my-sm-4" novalidate
                                    onSubmit={handleSubmit}>
                                    <div className="col-md-12 mb-2">
                                        <div className="input-group has-validation ">
                                            <input type="email" className="form-control custom-input" id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend" name='email' placeholder='Email' required
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />

                                            <div className="invalid-feedback">
                                                Please enter an email.
                                            </div>
                                        </div>
                                        <p className='form-errorlog text-danger mb-0 ps-2'
                                            style={{ fontSize: "14px" }} >
                                            {errors.email}
                                        </p>

                                    </div>
                                    <div className="col-md-12 mt-sm-4 mb-sm-2">
                                        <input
                                            type="password"
                                            className="form-control custom-input"
                                            id="validationTooltip03"
                                            placeholder="Password"
                                            name='password'
                                            required
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <div className="valid-tooltip">
                                            Looks good!
                                        </div>
                                        <div className="invalid-tooltip">
                                            Password must be at least 8 characters long.
                                        </div>
                                        <p className='form-errorlog text-danger ps-2' 
                                        style={{ fontSize: "14px" }}>
                                            {errors.password}
                                        </p>

                                    </div>

                                    <div className="col-12 mt-lg-3 mt-sm-2 mt-4 d-flex justify-content-center">
                                        <button type="submit" className="contbtnsign mt-sm-2  mb-sm-2">
                                            Login
                                        </button>

                                    </div>
                                    <div className="col-md-12">
                                        <p>Have an account?
                                            <Link to='/login' className='ps-1'>
                                                Signup
                                            </Link>
                                        </p>
                                    </div>
                                    <div className='col-md-12 mt-0'>
                                        <p>or signup with</p>
                                    </div>
                                    <div className="row pt-sm-2  justify-content-lg-center justify-content-sm-between
                                    justify-content-center ">
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
            </div>


        </>
    )
}
