import React from 'react';
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
import './thirdtemp.css';
import { Input, SliderFilledTrack, SliderTrack, Slider } from '@chakra-ui/react'
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Button from '../../../Navbar/Button';
export default function Thirdtemplarge() {

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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

  return (
    <section className='py-5 my-5'>
      <div className="actual-resume">
        <div style={{
          width: '210mm',
          minHeight: '210mm',
          marginLeft: 'auto',
          marginRight: 'auto',
        }} ref={componentRef}>

          <div className='row px-0' style={{ background: "white" }}>
            <div className='col-9 p-4 d-flex flex-wrap ps-0'>
              <Input
                value={managename}
                onChange={(e) => handleFieldChange(e, 'name')}
                placeholder={''}
                className="ps-3 text-start fs-1"
                variant='unstyled'
                pt={2}
              />
              <div className='div-sty3'></div>

              <Input
                value={managerole}
                onChange={(e) => handleFieldChange(e, 'role')}
                placeholder={''}
                className="ps-3 text-start pt-1"
                variant='unstyled'
              />

            </div>

            <div className='col-3 pt-3 '>
              {selectimages ? (
                <div className='updated-img-temp-lrg '>
                  <img
                    src={URL.createObjectURL(selectimages)}
                    alt="Selected Image"
                    style={{ display: 'block', }}
                    className='updated-img-temp-3 '

                  />
                </div>
              ) :
                (
                  <div className='updated-img-temp-lrg '>
                    <img
                      src={profile1}
                      alt="Selected Image"
                      style={{ display: 'block', }}
                      className='updated-img-temp-3 img-fluid'

                    />
                  </div>

                )}
            </div>

          </div>
          <div className="row row-edit-sect justify-content-between " style={{ background: "white" }}>
            <div className="col-7 px-0" >


              <div style={{ background: "black" }}>


                <div className='phn-edit d-flex  align-items-center pt-3 pb-1 ps-3' >
                  <span className='pe-2 text-light'>
                    <AiFillPhone />
                  </span>

                  <div onChange={(e) => handleFieldChange(e, 'phone')} >
                    <p className='phn-edit m-0 text-light'>
                      {managephn}
                    </p>

                  </div>

                </div>
                <div className=' d-flex mb-1 ps-3  align-items-end' >
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
                <div className='d-flex  mb-1 ps-3 ' >
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
                <div className='phn-edit d-flex  mb-1 ps-3' >
                  <span className='pe-1  pt-1 text-light'>
                    <AiFillPhone />
                  </span>

                  <div className='text-light' onChange={(e) => handleFieldChange(e, 'website')}>
                    {manageweb}
                  </div>
                </div>

                <div className='phn-edit d-flex align-items-center pb-3 ps-3' >
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
              <div>
                <h5 className='mt-3 ps-3'>
                  Profile
                </h5>
                <div className='ps-3' onChange={(e) => handleFieldChange(e, "profile")} >
                  {manageProfile}
                </div>

              </div>
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

            <div className="col-5 px-0" style={{
              background: "#EBEBEB"
            }}>

              {education?.length > 0 ?
                (
                  <>
                    <h5 className='mt-3 ps-3'>
                      Education
                    </h5>
                    {education.map((item) => (

                      <div>
                        <div className='pt-2 ps-3'>
                          {item.degree}
                        </div>
                        <div className='pt-2 ps-3'>
                          {item.School}

                        </div>
                        <div className='pt-2 ps-3'>
                          {item.date} - {item.enddate}
                        </div>

                      </div>

                    ))}
                  </>
                ) :
                ""}



              <div className=' my-4 ps-3'>
                {
                  languages.length > 0 ?
                    (
                      <>
                        <h5 className=' mb-0 py-2 fw-semibold'>
                          Language
                        </h5>
                        {
                          languages.map((item) => (
                            <>
                              <div className='pt-1'>
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

              <div className='ps-3'>

                {skills.length > 0 ?
                  (
                    <>
                      <h5 className=' mb-0 py-2 fw-semibold '>
                        Skills
                      </h5>
                      <div>
                        {skills.map((skill) =>
                        (
                          <>
                            <p className=' mb-0'>
                              {skill.skills}
                            </p>
                            <div className='pt-3 pb-4'>
                              <Slider
                                aria-label='slider-ex-4'
                                value={skill.range}>
                                <SliderTrack bg='lightgrey' py={4}
                                  style={{
                                    borderTopLeftRadius: '19px',
                                    borderBottomLeftRadius: '19px',
                                    borderTopRightRadius: '19px',
                                    borderBottomRightRadius: '19px',

                                  }}>
                                  <SliderFilledTrack
                                    bg='black'
                                    py={4}
                                    style={{
                                      borderTopLeftRadius: '19px',
                                      borderBottomLeftRadius: '19px'
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


            </div>

          </div>
        </div>
      </div>
      <div className="container">
        <div onClick={handlePrint}>
          <Button text="Print" />
        </div >


      </div>

    </section>
  )
}
