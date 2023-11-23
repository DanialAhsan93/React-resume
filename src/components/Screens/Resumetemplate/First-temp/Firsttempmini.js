import React, { useState } from 'react';
import './firsttempmini.css';
import { useNavigate } from 'react-router-dom';
import Mouseover from '../../../resume-template/Mouseover/Mouseover';
import { useDispatch, useSelector } from 'react-redux';
import Inputedit from '../../../reusables/Inputedit';
import Skills from '../../../resume-template/Skills/Skills';
import { FIELD_EDIT, manageexp, manageIndex, PRFEDIT } from '../../../../redux/actions/Actions';
import profile1 from '../../../images2/profile1.jpg';
import { AiFillPhone } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import { AiFillLinkedin } from 'react-icons/ai';
import Textedit from '../../../reusables/Textedit';
import { GiEarthAmerica } from 'react-icons/gi';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'


export default function Firsttempmini() {
    const [show, setshow] = useState(false)
    const navigate = useNavigate()

    const borderRadius = {
        radii: {
            none: '0',
            sm: '0.125rem',
            base: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px',
        },
    }
    const theme = extendTheme({ ...borderRadius })

    const managename = useSelector((state) => state.namereducer.name);
    const managerole = useSelector((state) => state.namereducer.role);
    const managephn = useSelector((state) => state.namereducer.phone);
    const manageeml = useSelector((state) => state.namereducer.email);
    const manageadr = useSelector((state) => state.namereducer.address);
    const managecity = useSelector((state) => state.namereducer.city);
    const managecountry = useSelector((state) => state.namereducer.country);
    const manageweb = useSelector((state) => state.namereducer.website);
    const managelink = useSelector((state) => state.namereducer.linkdin);
    const selectimages = useSelector((state) => state.namereducer.image);

    //------------------------

    const skills = useSelector((state) => state.skillreducer?.skills)

    //--------------------

    const education = useSelector((state) => state.educationreducer?.education)

    //--------------------

    const experience = useSelector((state) => state.expertreducer.experience)

    //--------------------

    const project = useSelector((state) => state.projectreducer.project)

    const profile = useSelector((state) => state.namereducer.profile)

    const language = useSelector((state) => state.languagereducer.languages)

    const dispatch = useDispatch()


    const handleFieldChange = (e, field) => {
        const value = e.target.value;
        dispatch(FIELD_EDIT(field, value));
    }

    //--------------------------------
    const handleshow = () => {
        setshow(true)
    }
    const handledonotshow = () => {
        setshow(false)
    }
    //--------------------------------

    const gotoCVvisitsec1 = (tempId) => {
        navigate('/edit', { state: { tempId } })
    }

    //--------------------------------
    const handleexpert = (e, send) => {
        const updateexp = e.target.value
        dispatch(manageexp(updateexp, send))
    }

    return (

        <section className='first-temp-edit py-5'
            onMouseEnter={handleshow}
            onMouseLeave={handledonotshow}
        >
            {
                show &&
                <div className='mous-eff'
                    style={{
                        zIndex: 3,
                        position: 'absolute',
                        top: '40%',
                        right: '20%'
                    }}
                    onClick={() => gotoCVvisitsec1(1)}>
                    <Mouseover />

                </div>
            }

            <div className="row row-edit-sect justify-content-between pt-2">
                <div className="col-lg-5 px-3" >
                    <div className='ps-4'>
                        {selectimages ? (
                            <div className='updated-img border border-1'>
                                <img
                                    src={URL.createObjectURL(selectimages)}
                                    alt="Selected Image"
                                    style={{ display: 'block', borderRadius: '50px' }}
                                    className='updated-img '

                                />
                            </div>
                        ) :
                            (
                                <div className='updated-img border border-1'>
                                    <img
                                        src={profile1}
                                        alt="Selected Image"
                                        style={{ display: 'block', borderRadius: '50px' }}
                                        className='updated-img img-fluid'

                                    />
                                </div>

                            )}
                    </div>

                    <div className='pt-2 ps-3'>
                        <p className='mb-1'>
                            <Textedit
                                value={managename}
                                onChange={(e) => handleFieldChange(e, 'name')}
                                placeholder={''}
                            />
                        </p>
                    </div>
                    <p className='role-edit mb-1 ps-3' >
                        <Inputedit
                            value={managerole}
                            onChange={(e) => handleFieldChange(e, 'role')}
                            placeholder={''}

                        />
                    </p>
                    <div className='contact-edit ps-2'>
                        <p className="fw-semibold text-uppercase  " style={{ fontSize: '16px' }}>
                            Contact
                        </p>
                    </div>

                    <p className='phn-edit d-flex align-items-center mb-1 ps-3' >
                        <span className='pe-1'>
                            <AiFillPhone />
                        </span>
                        <Inputedit
                            value={managephn}
                            onChange={(e) => handleFieldChange(e, 'phone')}
                            placeholder={''}

                        />
                    </p>
                    <div className=' d-flex mb-1 ps-3 align-items-end' >
                        <span className='pe-1  pt-2'>
                            <HiOutlineMail />
                        </span>
                        <div // value={manageeml}
                            onChange={(e) => handleFieldChange(e, 'email')} >
                            <p className='phn-edit m-0'>
                                {manageeml}
                            </p>

                        </div>
                    </div>
                    <div className='d-flex align-items-start mb-1 ps-3 ' >
                        <span className='pe-1 pt-2'>
                            <IoLocationSharp />
                        </span>
                        <div className='addr-edit' onChange={(e) => handleFieldChange(e, 'address')}>
                            <p className='phn-edit mb-1'>
                                {manageadr || "United Kingdom"}
                            </p>
                            {
                                manageadr !== "George heights, UK" && manageadr && (
                                    <div onChange={(e) => handleFieldChange(e, 'city')}>
                                        <p className='phn-edit m-0'>
                                            {managecity}
                                        </p>
                                        <div onChange={(e) => handleFieldChange(e, 'country')}>
                                            <p className='phn-edit m-0'>
                                                {managecountry}
                                            </p>
                                        </div>
                                    </div>

                                )}
                            {/* This is another way to do the above conditional rendering with ternary operator  */}


                            {/* {manageadr !== "George heights, UK" && manageadr ? 
                                    <div onChange={handlecity}>
                                        <p className='phn-edit m-0'>
                                            {managecity}
                                        </p>
                                        <div onChange={handlecntry}>
                                            <p className='phn-edit m-0'>
                                                {managecountry}
                                            </p>
                                        </div>
                                    </div>
                                 : undefined} */}

                        </div>

                    </div>
                    <p className='phn-edit d-flex  mb-1 ps-3' >
                        <span className='pe-1  pt-2'>
                            <GiEarthAmerica />
                        </span>
                        <Inputedit
                            value={manageweb}
                            onChange={(e) => handleFieldChange(e, 'website')}
                            placeholder={''}

                        />
                    </p>
                    <p className='phn-edit d-flex align-items-center  mb-1 ps-3' >
                        <span className='pe-1'>
                            <AiFillLinkedin />
                        </span>
                        <Inputedit
                            value={managelink}
                            onChange={(e) => handleFieldChange(e, 'linkdin')}
                            placeholder={''}

                        />
                    </p>

                    {/* <Skills /> */}

                    {skills.length > 0 ?
                        (
                            <>
                                <h5 className='prf-edit mt-2'> Skills </h5>

                                {skills.map((skill) => (
                                    <div className='pt-2 ps-2'>
                                        {skill.skills}
                                        <div className='py-2'>
                                            <Slider
                                                aria-label='slider-ex-4'
                                                value={skill.range} >
                                                <SliderTrack bg='lightgrey' py={4}
                                                    style={{
                                                        borderTopLeftRadius: '19px',
                                                        borderBottomLeftRadius: '19px',
                                                        borderTopRightRadius: '19px',
                                                        borderBottomRightRadius: '19px',


                                                    }}>
                                                    <SliderFilledTrack
                                                        bg='var(--bs-primary)'
                                                        py={4}
                                                        style={{
                                                            borderTopLeftRadius: '19px',
                                                            borderBottomLeftRadius: '19px'
                                                        }}
                                                    />
                                                </SliderTrack>
                                            </Slider>

                                        </div>

                                    </div>

                                ))}

                            </>
                        )
                        : ('')}
                    {language.length > 0 ?
                        (
                            <>
                              <h5 className='prf-edit mt-3'> Languages </h5>

                                {language.map((item) => (
                                    <div className='ps-2 pt-2'>
                                        {item.languages}
                                    </div>
                                ))}
                            </>
                        ) :
                        ''}

                </div>


                <div className="col-lg-6 p-0">
                    <h5 className='prf-edit mt-2'>
                        Profile
                    </h5>
                    <div onChange={(e) => handleFieldChange(e, 'profile')}>
                        {profile}
                    </div>


                    {education.length > 0 ? (
                        <>
                            <h5 className='prf-edit mt-2'> Education </h5>
                            {education.map((item) => (
                                <div className='border-start ps-3 mt-3'>
                                    <div className='' >
                                        {item.degree}
                                    </div>
                                    <div className='pt-2' >
                                        {item.School}
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className='pt-2' >
                                            {item.date}
                                        </div>
                                        <span className='mt-2 px-1'>
                                            -
                                        </span>
                                        <div className='pt-2 ps-' >
                                            {item.enddate}
                                        </div>

                                    </div>

                                </div>

                            ))}

                        </>
                    ) :
                        ('')

                    }

                    {experience.length > 0 ?
                        (
                            <>
                                <h5 className='prf-edit mt-2'>
                                    Experience
                                </h5>
                                {experience.map((item) => (
                                    <div className='border-start ps-3 mt-3'>
                                        <div className=''>
                                            {item.position}
                                        </div>
                                        <div className='pt-2' >
                                            {item.company}
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <div className='pt-2'>
                                                {item.startdate}
                                            </div>
                                            <span className='pt-2 px-1'>-</span>
                                            <div className='pt-2 '>
                                                {item.enddate}
                                            </div>

                                        </div>

                                        <div className='pt-2' >
                                            {item.expdescription}
                                        </div>

                                    </div>

                                ))}
                            </>
                        ) :
                        ('')
                    }
                    {project.length > 0 ?
                        (
                            <>
                                <h5 className='prf-edit mt-2'>
                                    Projects
                                </h5>
                                {project.map((item) => (
                                    <div>
                                        <div className='pt-3'>

                                            {item.projectname}
                                        </div>
                                        <div className='pt-2'>
                                            {item.url}
                                        </div>
                                        <div className='pt-2'>
                                            {item.description}
                                        </div>
                                    </div>

                                ))}
                            </>
                        ) :
                        ('')}


                </div>

            </div>


        </section >
    )
}
