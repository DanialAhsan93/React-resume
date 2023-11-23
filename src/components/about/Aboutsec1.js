import React from 'react';
import './aboutsec1.css';
import abtbgimg1 from '../images2/abtbgimg1.png';
import abtbgimg2 from '../images2/abtbgimg2.png';
import abtbgimg3 from '../images2/abtbgimg3.png';
import abtbgimg4 from '../images2/abtbgimg4.png';
import abtbgimg5 from '../images2/abtbgimg5.png';
import abtbgimg6 from '../images2/abtbgimg6.png';
import abtbgimg7 from '../images2/abtbgimg7.png';
import abtbgimg8 from '../images2/abtbgimg8.png';
import abtbgimg9 from '../images2/abtbgimg9.png';

export default function Aboutsec1(props) {
  return (
    <>
      <section style={props.customstyle}>
        <div className="container-fluid abt-sec1">
          <div className="container py-md-5">
            <div className='over py-md-5'>
              <div className="hollow">

              </div>
              <div className='d-flex justify-content-center pb-sm-3 pb-4'>
                <div>
                  <h1 className='pb-md-1 abt-mainhead' style={{ color: "var(--bs-primary)" }}>{props.mainhead}</h1>
                  <div style={{ width: '100%', height: '5px', background: 'var(--bs-primary)', borderRadius: '7px' }}>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className='F-head'>
                  <h1 className='my-md-3 text-center Fsub-head pb-sm-0 pb-3'>{props.habout}</h1>
                  <p className='my-md-3 text-center fw-semibold'>{props.pabout}</p>

                </div>
              </div>
            </div>

            <div className="hollow">

            </div>
            <img src={abtbgimg1} alt="#" className='abtbgimg1' />
            <img src={abtbgimg2} alt="#" className='abtbgimg2' />
            <img src={abtbgimg3} alt="#" className='abtbgimg3' />
            <img src={abtbgimg4} alt="#" className='abtbgimg4' />
            <img src={abtbgimg5} alt="#" className='abtbgimg5' />
            <img src={abtbgimg6} alt="#" className='abtbgimg6' />
            <img src={abtbgimg7} alt="#" className='abtbgimg7' />
            <img src={abtbgimg8} alt="#" className='abtbgimg8' />
            <img src={abtbgimg9} alt="#" className='abtbgimg9' />


          </div>
        </div>
      </section>

    </>
  )
}
