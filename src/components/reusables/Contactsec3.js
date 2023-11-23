import React from 'react';
import './contactsec3.css';

export default function Contactsec3() {
    return (
        <>
            <section className='contsec3-section'>
                <div className="container-fluid py-sm-5 py-3">
                    <div className="container py-sm-5 py-3 " >
                        <div className="row justify-content-center">
                            <div className='text-center'>
                                <h2 className='pb-5' style={{color:'var(--bs-primary)'}}>Frequently asked questions</h2>
                            </div>
                            <div className="col-md-8 "   >
                            <div className="accordion" id="accordionExample">
                            <div className="accordion-item" >
                                <h2 className="accordion-header" >
                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                                    style={{background:'var(--bs-primary)',color:'var(--bs-second)'}}>
                                   <strong> 01. Is ReactResume free to use? </strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab esse, at unde voluptate voluptatibus a nulla magnam exercitationem, quaerat perspiciatis error in modi, officiis voluptates architecto? Quidem, laudantium ipsa.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" >
                                <h2 className="accordion-header">
                                    <button className="accordion-button  collapsed" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" 
                                    aria-controls="collapseTwo" style={{background:'var(--bs-primary)',color:'var(--bs-second)'}}>
                                    <strong> 01. Is ReactResume free to use? </strong>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" >
                                <h2 className="accordion-header">
                                    <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                     data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
                                     style={{background:'var(--bs-primary)',color:'var(--bs-second)'}}>
                                    <strong> 01. Is ReactResume free to use? </strong>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            
                           
                        </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

        </>
    )
}
