import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mouseover from '../../../resume-template/Mouseover/Mouseover';
import { useDispatch, useSelector } from 'react-redux';
import Inputedit from '../../../reusables/Inputedit';
import Skills from '../../../resume-template/Skills/Skills';
import { ADR, CNTRY, CTY, EML, FIELD_EDIT, LNKD, NAME, PHN, PRFEDIT, ROLE, WEB } from '../../../../redux/actions/Actions';
import profile1 from '../../../images2/profile1.jpg';
import { AiFillPhone } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import { AiFillLinkedin } from 'react-icons/ai';
import Textedit from '../../../reusables/Textedit';
import './secondtemp.css';
import { Input, SliderFilledTrack, SliderTrack, Slider } from '@chakra-ui/react'


export default function Sectempmini() {
    const [show, setshow] = useState(false)
    const navigate = useNavigate()

    // const borderRadius = {
    //     radii: {
    //         none: '0',
    //         sm: '0.125rem',
    //         base: '0.25rem',
    //         md: '0.375rem',
    //         lg: '0.5rem',
    //         xl: '0.75rem',
    //         '2xl': '1rem',
    //         '3xl': '1.5rem',
    //         full: '9999px',
    //     },
    // }

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


    //------------

    const manageProfile = useSelector((state) => state.namereducer.profile)

    //------------

    const skills = useSelector((state) => state.skillreducer?.skills);

    //-------------

    const languages = useSelector((state) => state.languagereducer.languages)

    //-------------

    const education = useSelector((state) => state.educationreducer.education)

    //------------

    const experience = useSelector((state) => state.expertreducer.experience)

    //------------

    const project = useSelector((state) => state.projectreducer.project)

    const dispatch = useDispatch()

    //---------

    const handleFieldChange = (e, field) => {
        const value = e.target.value;
        dispatch(FIELD_EDIT(field, value));
    }

    //-----------------

    const handleprofile = (e, take) => {
        const value = e.target.value
        dispatch(PRFEDIT(take, value))
    }

    const handleshow = () => {
        setshow(true)
    }
    const handledonotshow = () => {
        setshow(false)
    }

    const gotoCVvisitsec1 = (tempId) => {
        navigate('/edit', { state: { tempId } })
    }
    return (
        <div onMouseEnter={handleshow}
            onMouseLeave={handledonotshow}
        // style={{ height: '90vh' }}
        >
            {
                show &&
                <div
                    className='mous-eff'
                    style={{
                        zIndex: 3,
                        position: 'absolute',
                        top: '40%',
                        right: '20%'
                    }}

                    onClick={() => gotoCVvisitsec1(2)}>
                    <Mouseover />

                </div>
            }
            <div className="row row-edit-sect justify-content-between ">
                <div className="col-lg-5 px-0" >
                    <div className='pt-3 d-flex justify-content-center bg-prf-img'>
                        {selectimages ? (
                            <div className='updated-img-temp-2 border border-1'>
                                <img
                                    src={URL.createObjectURL(selectimages)}
                                    alt="Selected Image"
                                    style={{ display: 'block', borderRadius: '50px' }}
                                    className='updated-img-temp-2 '

                                />
                            </div>
                        ) :
                            (
                                <div className='updated-img-temp-2 border border-1'>
                                    <img
                                        src={profile1}
                                        alt="Selected Image"
                                        style={{ display: 'block', borderRadius: '50px' }}
                                        className='updated-img-temp-2 img-fluid'

                                    />
                                </div>

                            )}
                    </div>
                    <div className='p-4 bg-prf-img d-flex flex-wrap justify-content-center'>
                        <p className='mb-0'>
                            <Input
                                value={managename}
                                onChange={(e) => handleFieldChange(e, 'name')}
                                placeholder={''}
                                className="text-center"
                                variant='unstyled'
                                pt={2}
                                color="white"
                            />
                        </p>
                        <p className='role-edit mb-0' >
                            <Input
                                value={managerole}
                                onChange={(e) => handleFieldChange(e, 'role')}
                                placeholder={''}
                                className="text-center pt-1"
                                variant='unstyled'
                                color="white"
                            />
                        </p>

                    </div>

                    <div className='div-sty2 p-3'></div>

                    <div style={{ background: "#225565" }}>
                        <p className="fw-semibold text-light text-uppercase text-center pt-3 mb-1 " style={{ fontSize: '16px' }}>
                            Contact
                        </p>

                        <div className='phn-edit d-flex justify-content-center align-items-center mb-1' >
                            <span className='pe-2 text-light'>
                                <AiFillPhone />
                            </span>

                            <div onChange={(e) => handleFieldChange(e, 'phone')} >
                                <p className='phn-edit m-0 text-light'>
                                    {managephn}
                                </p>

                            </div>

                        </div>
                        <div className=' d-flex mb-1 ps-3 justify-content-center align-items-end' >
                            <span className='pe-1  pt-1 text-light'>
                                <HiOutlineMail />
                            </span>
                            <div // value={manageeml}
                                onChange={(e) => handleFieldChange(e, 'email')} >
                                <p className='phn-edit m-0 text-light'>
                                    {manageeml}
                                </p>

                            </div>
                        </div>
                        <div className='d-flex align-items-start justify-content-center mb-1 ps-3 ' >
                            <span className='pe-1 pt-2 text-light'>
                                <IoLocationSharp />
                            </span>
                            <div className='addr-edit ' onChange={(e) => handleFieldChange(e, 'address')}>
                                <p className='phn-edit mb-1 text-light'>
                                    {manageadr || "United Kingdom"}
                                </p>
                                {
                                    manageadr !== "George heights, UK" && manageadr && (
                                        <div onChange={(e) => handleFieldChange(e, 'address')}>
                                            <p className='phn-edit m-0 text-light'>
                                                {managecity}
                                            </p>
                                            <div onChange={(e) => handleFieldChange(e, 'country')}>
                                                <p className='phn-edit m-0 text-light'>
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
                        <div className='phn-edit d-flex justify-content-center mb-1 ps-3' >
                            <span className='pe-1  pt-1 text-light'>
                                <AiFillPhone />
                            </span>

                            <div className='text-light' onChange={(e) => handleFieldChange(e, 'website')}>
                                {manageweb}
                            </div>
                        </div>

                        <div className='phn-edit d-flex align-items-center justify-content-center pb-3 ps-3' >
                            <span className='pe-1 text-light'>
                                <AiFillLinkedin />
                            </span>
                            {/* <Inputedit
                                value={managelink}
                                placeholder={''}

                            /> */}
                            <div className='text-light' onChange={(e) => handleFieldChange(e, 'linkdin')}>
                                {managelink}
                            </div>
                        </div>

                    </div>

                    <div className='div-sty2 p-3'></div>

                    <div className='text-center' style={{ background: "#225565" }}>

                        {skills.length > 0 ?
                            (
                                <>
                                    <p className=' mb-0 py-2 fw-semibold text-light'>
                                        Skills
                                    </p>
                                    <div>
                                        {skills.map((skill) =>
                                        (
                                            <>
                                                <p className='text-light mb-0'>
                                                    {skill.skills}
                                                </p>
                                                <div className='pt-1 pb-4 ps-3' style={{
                                                    width: "97%"
                                                }}>
                                                    <Slider
                                                        aria-label='slider-ex-4'
                                                        value={skill.range}>
                                                        <SliderTrack bg='lightgrey' py={2}
                                                            style={{
                                                                // borderTopLeftRadius: '19px',
                                                                // borderBottomLeftRadius: '19px',
                                                                // borderTopRightRadius: '19px',
                                                                // borderBottomRightRadius: '19px',

                                                            }}>
                                                            <SliderFilledTrack
                                                                bg='#A99265'
                                                                py={4}
                                                                style={{
                                                                    // borderTopLeftRadius: '19px',
                                                                    // borderBottomLeftRadius: '19px'
                                                                }}
                                                            />
                                                        </SliderTrack>
                                                    </Slider>

                                                </div>

                                            </>
                                        ))}

                                    </div>

                                </>
                            ) :
                            ("")}



                    </div>

                    <div className='div-sty2 p-3'></div>

                    <div className='text-center' style={{ background: "#225565" }}>
                        {
                            languages.length > 0 ?
                                (
                                    <>
                                        <p className=' mb-0 py-2 fw-semibold text-light'>
                                            Language
                                        </p>
                                        {
                                            languages.map((item) => (
                                                <>
                                                    <div className='pt-1 text-light'>
                                                        {item.languages}
                                                    </div>

                                                </>
                                            ))
                                        }
                                    </>
                                ) :
                                ""

                        }

                    </div>



                </div>

                <div className="col-lg-7 px-0">
                    <div>
                        <h5 className='mt-3 ps-3'>
                            Profile
                        </h5>
                        <div className='ps-3' onChange={(e) => handleFieldChange(e, "profile")} >
                            {manageProfile}
                        </div>

                    </div>
                    {education?.length > 0 ?
                        (
                            <>
                                <h5 className='mt-4 ps-3'>
                                    Education
                                </h5>
                                {education.map((item) => (

                                    <div>
                                        <div className='pt-1 ps-3'>
                                            {item.degree}
                                        </div>
                                        <div className='pt-1 ps-3'>
                                            {item.School}

                                        </div>
                                        <div className='pt-1 ps-3'>
                                            {item.date} - {item.enddate}
                                        </div>

                                    </div>

                                ))}
                            </>
                        ) :
                        ""}

                    {experience.length > 0 ?
                        (
                            <>
                                <h5 className='mt-3 ps-3'>
                                    Experience
                                </h5>
                                {experience.map((item) => (

                                    <div>
                                        <div className='ps-3 pt-2'>
                                            {item.position}
                                        </div>
                                        <div className='ps-3 pt-2'>
                                            {item.company}
                                        </div>
                                        <div className='ps-3 pt-2'>
                                            {item.startdate}-{item.enddate}
                                        </div>
                                        <div className='ps-3 pt-2'>
                                            {item.expdescription}
                                        </div>
                                    </div>


                                ))}
                            </>
                        ) :
                        ""}
                    {project.length > 0 ?
                        (
                            <>
                                <h5 className='mt-3 ps-3'>
                                    Project
                                </h5>
                                {project.map((item) => (
                                    <div>
                                        <div className='ps-3 pt-2'>
                                            {item.projectname}
                                        </div>
                                        <div className='ps-3 pt-2'>
                                            {item.url}
                                        </div>
                                        <div className='ps-3 pt-2'>
                                            {item.description}
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) :
                        ""}


                </div>

            </div>
        </div>
    )
}
