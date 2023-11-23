import React from 'react';
import './navbar.css';
import { NavLink, Link } from 'react-router-dom';
import navlogo from '../images/navlogo.png';
import Button from './Button';

export default function Navbar() {
    const navlinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'normal' : 'bold',
            // textDecoration: isActive ? 'underline' : 'none',
            color : isActive ? 'var(--bs-third)' : 'black'
        };
    };
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-body-transparent align-items-center ">
                    <div className="container px-0 nav-contain">
                        <div className='nav-body'>
                            <Link to='/' className="navbar-brand text-light m-0" href="#">
                                <img src={navlogo} alt="#" className='img-fluid logo' />
                            </Link>
                        </div>


                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">

                            <span className="navbar-toggler-icon "></span>

                        </button>

                        <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" >

                            <div className="offcanvas-body d-flex justify-content-center ">
                                <div className="container d-lg-flex p-0  justify-content-between  ">
                                    <ul className="navbar-nav m-md-auto me-md-0 d-flex align-items-lg-center  ">
                                        <li className="nav-item p-lg-0 py-3 mx-3 ">
                                            <div>
                                                <NavLink to='/' style={navlinkStyle} className=' nav-link fw-semibold  px-0 me-0'>Home </NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item p-lg-0 py-3 mx-3">
                                            <div>
                                                <NavLink to='/template' style={navlinkStyle} className=' nav-link fw-semibold  px-0 me-0'>Template </NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item p-lg-0 py-3 mx-3">
                                            <div >
                                                <NavLink to='/about' style={navlinkStyle} className=' nav-link fw-semibold  px-0 me-0'>About us </NavLink>
                                            </div>
                                        </li>

                                        <li className="nav-item p-lg-0 py-3 mx-3">
                                            <div>
                                                <NavLink to='/contact' style={navlinkStyle} className=' nav-link fw-semibold  px-0 me-0'>Contact us </NavLink>
                                            </div>
                                        </li>


                                    </ul>
                                    <div className='navbtn-row justify-content-between '>
                                        <div className="navcol mt-lg-0 mt-2">
                                            <Link to='/login' className=' m-lg-0 my-3 '>
                                                <Button text='login' />
                                            </Link>
                                            
                                        </div>
                                        <div className="navcol mt-lg-0 mt-4">
                                            <Link to='/signup' className=' m-lg-0 my-3 '>
                                                <Button text='SignUp' />
                                            </Link>
                                        </div>

                                    </div>


                                </div>


                                <button type="button" className="btn-close bg-light d-lg-none" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>

                            </div>
                        </div>

                    </div>
                </nav>
            </div>


        </>
    )
}
