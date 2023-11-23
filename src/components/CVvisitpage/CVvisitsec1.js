import React, { useEffect, useState } from 'react'
import './cvvisitsec1.css';
import { BiAlarmAdd } from 'react-icons/bi';
import { GrSubtractCircle } from 'react-icons/gr';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import Files from 'react-files'
import { AiOutlineCloudUpload } from 'react-icons/ai';
import download from '../images2/download.png';
import Firsttempmini from '../Screens/Resumetemplate/First-temp/Firsttempmini';
import Sectempmini from '../Screens/Resumetemplate/Second-temp/Sectempmini';
import Thirdtempmini from '../Screens/Resumetemplate/Third-temp/Thirdtempmini';
import { DLT_IMG, FIELD_EDIT, manageIndex, SELECT_EDIT } from '../../redux/actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { identifier } from '../Screens/Resumetemplate/Tempidentifier';


export default function CVvisitsec1() {
    const [open, setopen] = useState(false);
    const [tempid, settempid] = useState(null);
    const [item, setItem] = useState(null);

    const handletoggle = (event) => {
        event.preventDefault(); // this is to stop the default behaviour of <a> </a> tag otherwise use p tag and use cursor
        setTimeout(() => {
            setopen(!open)
        }, 300);
    }
    // ------------
    // const location = useLocation([])
    // console.log(location.state)           it is also if we want to show images from templatesec1.js

    //-------------

    const [selectedFile, setSelectedFile] = useState('');

    const handlefiles = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

    };


    //-------------

    // const location = useLocation([])
    // const tempId = location.state.tempId

    //---------------

    const linkStyle = {
        transform: 'translate3d(0, +.125rem, 0) !important',
        transition: 'all 0.3s ease in out',
    };
    //--------------------

    const dispatch = useDispatch()

    const selectimages = useSelector((state) => state.namereducer.image)

    const handleFieldChange = (e, field) => {
        const value = e.target.value;
        dispatch(FIELD_EDIT(field, value));
    }

    const handleImageChange = (e) => {
        const updatedImages = e.target.files[0];
        dispatch(SELECT_EDIT(updatedImages));
    }

    const handledeleteimage = () => {
        dispatch(DLT_IMG())
    }
    //--------------------------
    const navigate = useNavigate()

    // const gotofirsttempedu = () => {
    //     navigate('/edutemp')
    // }

    // const tempId = determineTempId(); // Determine the current tempId based on your logic

    // const gotofirsttempedu = () => {
    //   navigate(`/edutemp?tempId=${tempId}`);
    // };


    //-----------------------------

    const index = useSelector((state) => state.indexReducer.tempId);


    const setIndexInStore = (index) => {
        dispatch(manageIndex(index));
        localStorage.setItem('tempId', index)
    };

    const gotoedit = (index) => {
        setIndexInStore(index)
        navigate('/edutemp', { state: { tempId: index } })
    }

    

    useEffect(() => {
        // Retrieve the 'tempId' from localStorage when the component mounts
        const id = localStorage.getItem('tempId');

        if (id) {
            // Set the 'tempid' state variable
            settempid(id);
        }
    }, []);

    // Use a useEffect to filter the 'identifier' array when 'tempid' changes
    useEffect(() => {
        if (tempid !== null) {
            const filteredItem = identifier.find((item, index) => index === parseInt(tempid));
            setItem(filteredItem);
        }
    }, [tempid])


    



    // console.log(handledeleteimage)
    return (
        <>
            <section className='py-5' style={{ background: 'var(--bs-primary)' }}>

                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <div className="sub-container">
                        <div className="row rowcv-sec1 justify-content-between pe-sm-3" style={{ background: 'var(--bs-second)' }}>
                            <div className="col-md-6 text-center py-5" style={{ background: '#F2F5FA' }}>


                                <div className='text-center' style={{ color: 'var(--bs-primary)' }}>
                                    <h4 className='contsec2-formhead'>Add your personal details to your resume</h4>
                                    <p>It allows employers to see how they can contact you</p>
                                </div>
                                <form className="row row-infosec mt-sm-5 g-5 py-sm-4 px-0 needs-validation d-sm-flex m-0 justify-content-center"
                                    noValidate style={{ background: '#FFFFFF', borderRadius: '10px' }}>
                                    <div className="col-md-6 mt-4">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom01"
                                            required
                                            placeholder='Name'
                                            onChange={(e) => handleFieldChange(e, 'name')} />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>

                                    <div className="col-md-6 mt-4">
                                        {/* <input type="text" className="form-control" id="validationCustom02" required />
                                                <div className="valid-feedback">
                                                    Looks good!
                                                </div> */}
                                        <div className="files">

                                            <div className="row">
                                                <div className="col-4">

                                                    {selectimages ? (
                                                        <img
                                                            src={URL.createObjectURL(selectimages)}
                                                            alt="Selected Image"
                                                            style={{ display: 'block', borderRadius: '50px', width: '65px', height: '65px' }}
                                                        />
                                                    ) : (
                                                        <img
                                                            src={download}
                                                            alt="Selected Image"
                                                            style={{ display: 'block', borderRadius: '50px', width: '65px', height: '65px' }}
                                                        />
                                                    )}
                                                </div>
                                                <div className="col-7 text-start px-0 d-flex align-items-center">
                                                    <div>
                                                        {selectimages ? (
                                                            <div>
                                                                <label htmlFor="fileInput" className="custom-file-upload p-0 d-flex align-items-center justify-content-start">
                                                                    <div>
                                                                        <label htmlFor="fileInput" className="custom-file-upload p-0 d-flex align-items-center justify-content-start">
                                                                            <AiOutlineEdit className="upload-icon" style={{ fontSize: '22px' }} />
                                                                            <span className="ps-2 edit-txt">Edit</span>
                                                                        </label>
                                                                        <input type="file" id="fileInput" onChange={handleImageChange} accept=".png, .jpg, .jpeg, .webp, .svg" />
                                                                    </div>
                                                                </label>
                                                                <label htmlFor="fileInput" className="custom-file-upload p-0 d-flex align-items-center justify-content-start">
                                                                    <AiOutlineDelete className="upload-icon" style={{ fontSize: '22px' }} />
                                                                    <span className="ps-2 edit-txt" onClick={handledeleteimage}>
                                                                        Delete
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <h6 className="m-0">Profile Image</h6>
                                                                <div>
                                                                    <label htmlFor="fileInput" className="custom-file-upload p-0 d-flex align-items-center justify-content-start">
                                                                        <AiOutlineCloudUpload className="upload-icon-1" style={{ fontSize: '22px' }} />
                                                                        <span className="ps-2">Upload photo</span>
                                                                    </label>
                                                                    <input type="file" id="fileInput" onChange={handleImageChange} accept=".png, .jpg, .jpeg, .webp, .svg" />
                                                                </div>
                                                            </div>
                                                        )}

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="input-group has-validation">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend"
                                                placeholder='Role'
                                                required
                                                onChange={(e) => handleFieldChange(e, 'role')}
                                            />
                                            <div className="invalid-feedback">
                                                Please choose your role.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="input-group has-validation">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustomUsername"
                                                placeholder='Email'
                                                aria-describedby="inputGroupPrepend"
                                                required
                                                onChange={(e) => handleFieldChange(e, 'email')} />
                                            <div className="invalid-feedback">
                                                Please choose Email address.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="input-group has-validation">
                                            <input type="text"
                                                className="form-control"
                                                id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend"
                                                placeholder='Address'
                                                required
                                                onChange={(e) => handleFieldChange(e, 'address')} />
                                            <div className="invalid-feedback">
                                                Please enter your address.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="input-group has-validation">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend"
                                                placeholder='Number'
                                                required
                                                onChange={(e) => handleFieldChange(e, 'phone')} />
                                            <div className="invalid-feedback">
                                                Please enter phone your number.
                                            </div>
                                        </div>
                                    </div>

                                    <div className=" align-items-center mt-2 ps-4">
                                        {open && (
                                            <div className="row">
                                                <div className="col-md-6 mt-4 pe-4">
                                                    {open && (
                                                        <div className="input-group has-validation">
                                                            <input type="text"
                                                                className="form-control"
                                                                id="validationCustom03"
                                                                required
                                                                placeholder='City name'
                                                                onChange={(e) => handleFieldChange(e, 'city')} />

                                                            <div className="invalid-feedback"> Please provide a valid city.</div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-md-6 mt-4 ps-4">
                                                    {open && (
                                                        <div className=" input-group has-validation">
                                                            <input type="text"
                                                                onChange={(e) => handleFieldChange(e, 'country')}
                                                                className="form-control"
                                                                id="validationCustom05"
                                                                required
                                                                placeholder='Country'
                                                            />
                                                            <div class="invalid-feedback">
                                                                Please provide country.
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-md-6 mt-4 pe-4">
                                                    {open && (
                                                        <div className="input-group has-validation">
                                                            <input
                                                                type="text"
                                                                onChange={(e) => handleFieldChange(e, 'website')}
                                                                className="form-control"
                                                                id="validationCustomUsername"
                                                                aria-describedby="inputGroupPrepend"
                                                                placeholder="Website"
                                                                required
                                                            />
                                                            <div className="invalid-feedback">Please enter your phone number.</div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-md-6 mt-4 ps-4">
                                                    {open && (
                                                        <div className=" input-group has-validation">
                                                            <input
                                                                type="text"
                                                                onChange={(e) => handleFieldChange(e, 'linkdin')}
                                                                className="form-control"
                                                                id="validationCustomUsername"
                                                                aria-describedby="inputGroupPrepend"
                                                                placeholder="Linkdin"
                                                                required
                                                            />
                                                            <div className="invalid-feedback">Please enter your phone number.</div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        <div className='py-3  d-flex justify-content-center align-items-center'>
                                            {open ? (<GrSubtractCircle />) : (<BiAlarmAdd />)}

                                            <a href="#" className="mt-0 text-primary ps-2 icon-link icon-link-hover"
                                                style={linkStyle} onClick={handletoggle} >
                                                {open ? 'Collapse Information' : 'Additional Information'}
                                            </a>
                                        </div>


                                    </div>
                                </form>

                                <button
                                    type="button"
                                    className="contbtnbanner2 mt-4  mb-2"
                                    onClick={() => gotoedit(index)}>
                                    Continue
                                </button>

                            </div>
                            <div className="col-md-5 ">
                                {/* <img src={location.state.item.imgtemp1} alt="#" className='img-visit ' /> */}
                                {/* {tempId === 1 && <Firsttempmini />}
                                {tempId === 2 && <Sectempmini />}
                                {tempId === 3 && <Thirdtempmini />} */}
                                {item}


                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
