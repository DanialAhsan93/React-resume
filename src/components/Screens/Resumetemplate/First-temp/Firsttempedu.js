import React, { useEffect, useState } from 'react';
import Firsttempmini from './Firsttempmini';
import Sectempmini from '../Second-temp/Sectempmini';
import Thirdtempmini from '../Third-temp/Thirdtempmini';
import { identifier } from '../Tempidentifier';
import { useDispatch, useSelector } from 'react-redux';
import './firstempedu.css';
import { FIELD_EDIT } from '../../../../redux/actions/Actions';
import Skills from '../../../resume-template/Skills/Skills';
import Experience from '../../../resume-template/Experience/Experience';
import Education from '../../../resume-template/Education/Education';
import Project from '../../../resume-template/Project/Project';
import Language from '../../../resume-template/Language/Language';

export default function Firsttempedu() {
    const [tempId, settempid] = useState(null)
    const [item, setitem] = useState(null)


    useEffect(() => {
        const id = localStorage.getItem('tempId')

        if (id) {
            settempid(id)
        }

    }, [])

    useEffect(() => {
        if (tempId !== null) {
            const filteredItem = identifier.find((item, index) => index === parseInt(tempId))
            setitem(filteredItem)
        }
    }, [tempId])
    // const id = useSelector((state) => state.indexReducer.tempId)
    // const item = identifier.filter((item, index) => index === id)

    //--------------------------------

    const dispatch = useDispatch()

    const handleFieldChange = (e, field) => {
        const value = e.target.value;
        dispatch(FIELD_EDIT(field, value));
    }





    return (
        <section>
            <div className='container-fluid'>
                <div className="row justify-content-between">
                    <div className="col-sm-6 border border-1 pt-5 ps-sm-5" style={{ background: 'var(--bs-second)' }}>
                        <div className="accordion" id="accordionExample">


                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                                        style={{ background: 'var(--bs-primary)', color: 'var(--bs-second)' }}>
                                        <h5 className='m-0'>Profile</h5>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className='mb-2'>
                                            A short summary
                                            of your experience that sits at the top of your
                                            resume (2-3 sentences)
                                        </div>
                                        <textarea name="profile-decription" className='prf-descrip ps-2' rows="5"
                                            type='text'
                                            placeholder='Description'
                                            onChange={(e) => handleFieldChange(e, 'profile')} />

                                    </div>
                                </div>
                            </div>


                            <Education />
                            <Skills />
                            <Experience />
                            <Project />
                            <Language />
                            
                        </div>
                    </div>
                    <div className="col-sm-6 px-5">
                        {item}

                    </div>

                </div>
            </div>
        </section>

    )
}
