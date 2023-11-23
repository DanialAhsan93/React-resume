import React from 'react';
import Slider from "react-slick";
import perfectresume from '../images/perfectresume.png';
import Samplearrows from '../home/Samplearrows';
import Sampleprevarrow from '../home/Sampleprevarrow';
import './section3.css';
import { Link } from 'react-router-dom';
import { Tempdata } from '../template/Tempdata';
import '../template/templatesec1.css';
import { AiOutlineEye } from 'react-icons/ai'
import { SiClickup } from 'react-icons/si';

export default function Section3() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <Samplearrows />,
        prevArrow: <Sampleprevarrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>

            <section style={{ background: 'var(--bs-second)', zIndex: '-1' }}>
                <div className='container-fluid py-sm-5 py-5' style={{
                    background: 'var(--bs-primary)', borderTopLeftRadius: '90px',
                    borderBottomRightRadius: '90px'
                }}>
                    <div className="container" >
                        <div className='d-flex justify-content-center pb-sm-4'>
                            <h1 className='text-light text-center slider-head pb-sm-0 pb-4' style={{ width: "60%" }}>Top resume templates
                                to make the perfect resume</h1>
                        </div>
                        <div className='row'>

                            <Slider {...settings}>
                   {
                            Tempdata.map((item, i) => (
                                <div key={i} className="col-sm-3 col-12 text-center m-md-3 img-temp" >
                                    <div class="image-container">
                                        <img src={item.imgtemp1} alt="#" className='img-fluid '  
                                        style={{height:'52vh'}} />
                                        <div class="shutter-overlay"></div>
                                        <div className='card-temp1 m-3' style={{left:'38%'}} >
                                            <div>
                                                <Link to='/template' className='text-light'>
                                                    <h3>
                                                    <AiOutlineEye className='icon-tsec2'/>

                                                    </h3>
                                                </Link>
                                            </div>
                                            <div className='pt-2'>
                                                <Link to='/template' className='text-light'>
                                                    <h3>
                                                    <SiClickup className='icon-tsec2' />

                                                    </h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </Slider>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}
