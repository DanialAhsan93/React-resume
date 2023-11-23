import React from 'react';
import './section4.css';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';

export default function Section4() {
    return (
        <>
            {/* <section>
        <div classNameName="container-fluid py-md-5">
            <div classNameName="conatiner">
                <div classNameName="row">
                    <div classNameName="col-md-3">

                    </div>
                </div>
            </div>
        </div>
      </section> */}

      <section style={{ background: 'var(--bs-primary)',zIndex:'-1' }}>
      <div className="container-fluid py-md-5 py-5" style={{ background: 'var(--bs-second)',borderTopLeftRadius:'90px' }}>
                <section className="featured-services-area ptb-100" >
                    <div className="container">
                        <div className="section-title">
                            <h3 className='py-md-5 text-center'>Our Features</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-featured-box">
                                    <div className="icon">
                                        <img src={card1} alt="Create CV" style={{ width: "50px" }} />
                                    </div>
                                    <h3 className='feat-head'>Create Resume / CV</h3>
                                    <p>Create a professional-quality resume / CV in minutes.</p>
                                    <a href="#" className="default-btn">Create New Resume</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-featured-box">
                                    <div className="icon color-facd60">
                                        <img src={card2} alt="Create Cover Letter" style={{ width: "50px" }} />
                                    </div>
                                    <h3 className='feat-head'>Create Cover Letter</h3>
                                    <p>Create an eye-catching cover letter to send with your resume.</p>
                                    <a href="#" className="default-btn">Create New Letter</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-box">
                                    <div className="icon color-1ac0c6">
                                        <img src={card3} alt="Create Resume Website" style={{ width: "50px" }} />
                                    </div>
                                    <h3 className='feat-head'>Visit Best Resume</h3>
                                    <p>Vist our best examples to create resume that you can share with recruiters!</p>
                                    <a href="#" className="default-btn">Top resume examples</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
      </section>

            


        </>
    )
}
