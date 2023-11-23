import React from 'react';
import './footer.css';
import footerlogo from '../images/footerlogo.png'
import { Link } from 'react-router-dom';

export default function Footer() {
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     });
    // }
    const scrollToTop = () => {
        const scrollStep = window.pageYOffset / 50;
      
        const scrollAnimation = () => {
          if (window.pageYOffset > 0) {
            window.scrollBy(0, -scrollStep);
            requestAnimationFrame(scrollAnimation);
          }
        };
      
        requestAnimationFrame(scrollAnimation);
      };
        

    return (
        <>
            <footer className="footer py-5" style={{ background: 'var(--bs-primary)' }}>
                <div className="container">
                    <div className="row justify-content-start" data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className="col-md-3 me-5">
                            <a href="#"><img src={footerlogo} alt="#" className="img-fluid pb-4" /></a>
                            <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id doloribus natus nisi voluptates deleniti eos aperiam
                                vel ea officiis?</p>
                        </div>
                        <div className="col-md-3 text-light mx-md-5">
                            <h4 className="fw-normal">QUICK LINK</h4>
                            <ul className="ps-1 py-3">
                                <li to='' className="list-unstyled my-1">

                                        <Link to='/' onClick={scrollToTop} className="text-decoration-none">
                                            Home
                                        </Link>

                                </li>
                                <li to='' className="list-unstyled my-1">
                                    <Link to='/template' onClick={scrollToTop} className=" text-decoration-none">Templates</Link>
                                </li>
                                <li to='' className="list-unstyled my-1">
                                    <Link to='/about' onClick={scrollToTop} className="text-decoration-none">About</Link>
                                </li>
                                <li to='' className="list-unstyled my-1">
                                    <Link to='/contact' onClick={scrollToTop} className=" text-decoration-none">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-light ">
                            <h4 className="fw-normal">SERVICES</h4>
                            <ul className="ps-1 py-3">
                                <li to='' className="list-unstyled my-1">
                                    <Link to='/CV' className=" text-decoration-none">Create CV</Link>
                                </li>
                                <li to='' className="list-unstyled my-1">
                                    <Link to='/template' className=" text-decoration-none">Top cover letters</Link>
                                </li>
                                <li to='' className="list-unstyled my-1">
                                    <Link to='/template' className=" text-decoration-none">Resumes</Link>
                                </li>
                                <li to='' className="list-unstyled my-1">
                                    <Link to='/template' className=" text-decoration-none">Vist resume</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>

        </>
    )
}
