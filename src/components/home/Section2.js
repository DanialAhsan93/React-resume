import React from 'react';
import img1 from '../images/img1.svg';
import img2 from '../images/img2.jpg';
import './section2.css'

export default function Section2() {
  return (
    <>

    <section style={{background:'var(--bs-primary)', zIndex:'-1'}}>
    <div className="container-fluid py-lg-5 py-md-0 py-5" style={{background:'var(--bs-second)',borderBottomRightRadius:'90px'}}>
        <div className="container sec2-contain py-lg-3">
            <div className="row justify-content-between">
                <div className="col-lg-3 col-md-4 py-md-5">
                    <div>
                    <h4 className='py-md-2 py-md-1'>Templates that stand out</h4>
                    <p>With our field-tested templates you boost your chances of getting interviews
                         significantly.
                    </p>
                    </div>
                    
                </div>
                <div className="col-lg-3 col-md-4 py-md-5">
                    <div>
                    <h4 className='py-md-2 py-md-1'>Easily created online</h4>
                    <p>Designing a professional resume cannot get easier, with ready made, field-tested templates
                    </p>
                </div>
                    </div>
                
            </div>

            <img src={img2} alt="#" className='img2 d-md-flex d-none' />

            <div className="row  justify-content-between py-md-0 py-3">
                <div className="col-lg-3 col-md-4 py-md-5 ">
                    <div>
                    <h4 className='py-md-2 py-md-1'>Automatic spell-checker</h4>
                    <p>Never worry about spelling mistakes again. We protect you from mistakes and typos.
                    </p>
                    </div>
               
                </div>
                <div className="col-lg-3 col-md-4 py-md-5 ">
                    <div>
                    <h4 className='py-md-2 py-md-1'>Templates that stand out</h4>
                    <p>With our field-tested templates you boost your chances of getting interviews
                         significantly.
                    </p>
                    </div>
               
                </div>
            </div>

        </div>
    </div>
    </section>
   
    
    </>
  )
}
