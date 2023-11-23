import React from 'react';
import './aboutsec2.css';

export default function Aboutsec2() {
    return (
        <>
            <section style={{background:'var(--bs-second)'}}>
                <div className="container-fluid py-md-5 py-5" style={{ background: 'var(--bs-primary)', borderTopLeftRadius:'90px',
            borderBottomRightRadius:'90px' }}>
                    <div className="container py-sm-5 ">
                        <div className="row justify-content-sm-between  py-sm-2 py-4  text-light">
                            <div className="col-md-5 pb-sm-0 pb-5 d-flex align-items-center">
                                <h3 className=' meet-team-head text-sm-start text-center'>Allow me to introduce our compact and inventive group
                                    responsible for ReactResume.</h3>
                            </div>
                            <div className="col-lg-5 col-sm-6">
                                <p className='meet-team-p text-sm-start text-center '>

                                    Virtue netz Technologies Limited has developed React resume, an innovative online
                                     platform designed to assist individuals in crafting exceptional resumes and CVs.
                                      With a plethora of tools and templates available, this platform enables users 
                                      to effortlessly create professional-looking CVs. The website offers a 
                                      user-friendly interface, guiding individuals through a step-by-step process 
                                      that includes selecting a template and inputting personal information, 
                                      work history, educational background, and skill sets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
