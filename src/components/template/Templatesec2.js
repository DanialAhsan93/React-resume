import React from 'react';
import './templatesec2.css'
import { TfiAnnouncement } from 'react-icons/tfi';
import { BsLayoutTextWindow } from 'react-icons/bs';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Templatesec2() {


    return (
        <>
            <section style={{ background: 'var(--bs-second)' }}>
                <div className="container-fluid">
                    <div className="container py-sm-5 py-3">
                        <div className="row py-sm-5">
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <p className='steps-p'>How simple it is</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center pb-sm-5 pb-3">
                                <div className='steps-head text-center'>
                                    <h2 className='steps-headh2'>Make you unique resume in three simple steps</h2>

                                </div>
                            </div>

                            <div className="col-md-4 py-sm-2 py-1 ">
                                <Link to='/create'>
                                    <div className='px-sm-3 py-sm-4 px-2 py-3 text-center steps-card'>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h3 className='icons-steps' >
                                                <div className='inner-icon1 border-border-1 d-flex justify-content-center align-items-center' >
                                                    <TfiAnnouncement className='icon' />
                                                </div>
                                            </h3>
                                        </div>

                                        <h3 className='py-sm-3 p-1 step-text' >Step 1</h3>
                                        <p className='pt-sm-1 pt-1 step-text' >Select from our collection of expertly crafted resumes</p>
                                    </div>
                                </Link>


                            </div>


                            <div className="col-md-4 py-sm-2 py-1 ">
                                <Link to='/create'>
                                    <div className='px-sm-3 py-sm-4 px-2 py-3 text-center steps-card'>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h3 className='icons-steps2'  >
                                                <div className='inner-icon2 border-border-1 d-flex justify-content-center align-items-center' >
                                                    <BsLayoutTextWindow className='icon' />
                                                </div>
                                            </h3>
                                        </div>

                                        <h3 className='py-sm-3 p-1 step-text' >Step 2</h3>
                                        <p className='pt-sm-1 pt-1 step-text steptext-sub' >
                                            Complete your profile using our straightforward prompts.
                                        </p>
                                    </div>
                                </Link>

                            </div>
                            <div className="col-md-4 py-sm-2 py-1 ">
                                <Link to='/create'>
                                    <div className='px-sm-3 py-sm-4 px-2 py-3 text-center steps-card'>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h3 className='icons-steps3'  >
                                                <div className='inner-icon3 border-border-1 d-flex justify-content-center align-items-center' >
                                                    <MdOutlineScreenSearchDesktop className='icon' />
                                                </div>
                                            </h3>
                                        </div>

                                        <h3 className='py-sm-3 p-1 step-text' >Step 3</h3>
                                        <p className='pt-sm-1 pt-1 step-text' >
                                            Begin your job search today by downloading and applying.
                                        </p>
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
