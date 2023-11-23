import React, { useEffect } from 'react';
import './banner.css'
import Animation from './Animation';
import { Link } from 'react-router-dom';
export default function Banner() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <>
        <section className='main-banner'>
                <div className="container-fluid py-sm-5 py-5 ">
                    <div className="container">
                        <div className="row inner-banner justify-content-md-between align-items-center
                         py-md-5 ">
                            <div className="col-md-6 px-md-0">
                                <div className="d-flex flex-wrap align-items-center text-sm-start text-center
                                justify-content-sm-start justify-content-center">
                                    <h1 className='main-head ' style={{ color: 'var(--bs-second)' }}>
                                        Create your winning resume in minutes. Get hired fast!
                                    </h1>
                                    <p className='text-light pt-1 p-banner'>
                                        Our convenient resume builder simplifies the process of writing a resume,
                                        eliminating the hassle. Select from various templates and effortlessly follow
                                        prompts to craft an impeccable resume tailored for the job you desire.
                                    </p>
                                    <Link to='/template'>
                                        <button type="button" className="contbtnbanner mt-sm-2  mb-sm-2">
                                            Choose Template
                                        </button>

                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="pt-sm-4 pt-5">
                                    <Animation />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
           

        </>
    )
}
