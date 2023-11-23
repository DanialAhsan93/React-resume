import React from 'react';
import './contactsec2.css';
import Button from '../Navbar/Button';
import { useFormik } from 'formik';
import { contactsec2Schema } from '../schemas';

const initialValues = {
    name:"",
    email:"",
    lastname:"",
    message:"",
}

export default function Contactsec2() {
    const {values, errors, handleBlur, handleChange,handleSubmit} = useFormik(
        {
            initialValues: initialValues,
            validationSchema: contactsec2Schema,
            onSubmit : (values) => {
                console.log(values)
            }

        }
    )
    console.log(errors)
    return (
        <>
            <section >
                <div className="container-fluid py-md-5 py-4" style={{ background: 'var(--bs-second)' }}>
                    <div className="container d-flex justify-content-center py-md-5 py-4">

                        <div className="row contsec2-row">
                            <div className='text-center pt-md-5 pt-3' style={{ color: 'var(--bs-primary)' }}>
                                <h1 className='contsec2-formhead'>You can ask our team Questions </h1>
                            </div>
                            <form className="row g-5 px-sm-4 px-0 needs-validation d-sm-flex m-0 justify-content-center" noValidate
                            onSubmit={handleSubmit}>
                                <div className="col-md-6 mt-4">
                                    <label htmlFor="firstname" className="form-label">First name</label>
                                    <input type="name" autoComplete='off' name='name' 
                                    className="form-control custom-input" id="firstname" required 
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                    <p className='form-error text-danger'>{errors.name}</p>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <label htmlFor="lastname" className="form-label">Last name</label>
                                    <input type="name" autoComplete='0ff' name='lastname'  className="form-control custom-input" id="lastname" 
                                     value={values.lastname}
                                     onChange={handleChange}
                                     onBlur={handleBlur} required />
                                    <p className='form-error text-danger'>{errors.lastname}</p>

                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <div className="input-group has-validation">
                                        <input type="email" autoComplete='off' name='email' className="form-control custom-input" id="email" aria-describedby="inputGroupPrepend" required
                                         value={values.email}
                                         onChange={handleChange}
                                         onBlur={handleBlur} />

                                        <div className="invalid-feedback">
                                            Please choose Email address.
                                        </div>
                                    </div>
                                    <p className='form-error text-danger'>{errors.email}</p>

                                </div>
                                <div className="col-md-12 mt-4">
                                    <label htmlFor="validationMessage" className="form-label">Message</label>
                                    <textarea className="form-control custom-input" autoComplete='off' rows="4" id="validationMessage" required
                                    name='message'
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}></textarea>
                                   <p className='form-error text-danger'>{errors.message}</p>

                                    <div className="invalid-feedback">
                                        Please enter a message.
                                    </div>
                                </div>

                                <div className=' d-flex  mt-2'>
                                    <div className="col-md-5 d-flex  d-inline-block">
                                        <div className="form-check">
                                            <input className="form-check-input " type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label" htmlFor="invalidCheck">
                                                Agree to terms and conditions
                                            </label>
                                            <div className="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className=' d-flex justify-content-center mb-5'>


                                    <div className="col-md-2 text-center d-inline-block">
                                        <button type="submit" className="contbtnbanner2 btn  mt-sm-3  mb-sm-2"
                                        >
                                            submit
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
