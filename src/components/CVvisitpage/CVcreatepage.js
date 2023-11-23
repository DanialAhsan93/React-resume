import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { BiAlarmAdd } from 'react-icons/bi';
import { GrSubtractCircle } from 'react-icons/gr';
import Files from 'react-files'
import { AiOutlineCloudUpload } from 'react-icons/ai';
import download from '../images2/download.png';
import { Tempdata } from '../template/Tempdata';
import { FIELD_EDIT} from '../../redux/actions/Actions';
import { useDispatch } from 'react-redux';

export default function CVcreatepage() {
    const [open, setopen] = useState(false);

    const handletoggle = (event) => {
        event.preventDefault(); // this is to stop the default behaviour of <a> </a> tag otherwise use p tag and use cursor
        setTimeout(() => {
            setopen(!open)
        }, 300);
    }
    // console.log(Tempdata)
    // ------------

    const linkStyle = {
        transform: 'translate3d(0, +.125rem, 0) !important',
        transition: 'all 0.3s ease in out',
        // textDecoration: 'underline',
    };
    const handleChange = (files) => {
        console.log(files)
    }

    const handleError = (error, file) => {
        console.log('error code ' + error.code + ': ' + error.message)
    }

    //------------------
    
    const dispatch = useDispatch()

    
    const handleFieldChange = (e, field) => {
        const value = e.target.value;
        dispatch(FIELD_EDIT(field, value));
    }

    

    return (
        <>
            <Navbar />
            <section>
                <div className="container-fluid">
                    <div className="row justify-content-between">

                        <div className="col-md-7 px-md-5 text-center py-md-5" style={{ background: '#F2F5FA' }}>

                            <div className='px-4'>

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
                                            onChange={(e) => handleFieldChange(e, 'name')}
                                        />
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
                                            <Files
                                                className='files-dropzone'
                                                onChange={"handleChange"}
                                                onError={handleError}
                                                accepts={['image/png', 'image/png', '.pdf', 'audio/*']}
                                                multiple
                                                maxFileSize={10000000}
                                                minFileSize={1}
                                                clickable>

                                                <div className='d-flex align-items-center'>
                                                    <img src={download} alt="#" className='img-fluid down-img' />
                                                    <div className='ps-3'>
                                                        <h6 className='text-start mb-0'>Profile image</h6>
                                                        <div className='d-flex align-items-center'>
                                                            <AiOutlineCloudUpload className='upload-icon' />
                                                            <div className='text-start ps-1'>
                                                                <a href="" style={{ color: 'var(--bs-primary)' }}>
                                                                    Upload photo
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </Files>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="input-group has-validation">
                                            <input type="text"
                                                className="form-control"
                                                id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend"
                                                placeholder='Role'
                                                required
                                                onChange={(e) => handleFieldChange(e, 'role')} />
                                            <div className="invalid-feedback">
                                                Please choose your role.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="input-group has-validation">
                                            <input type="text"
                                                className="form-control"
                                                onChange={"handleeml"}
                                                id="validationCustomUsername"
                                                placeholder='Email'
                                                aria-describedby="inputGroupPrepend"
                                                required />
                                            <div className="invalid-feedback">
                                                Please choose Email address.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="input-group has-validation">
                                            <input type="text"
                                                className="form-control"
                                                onChange={"handleadr"}
                                                id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend"
                                                placeholder='Address'
                                                required />
                                            <div className="invalid-feedback">
                                                Please enter your address.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="input-group has-validation">
                                            <input type="number"
                                                className="form-control"
                                                onChange={"handlephn"}
                                                id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend"
                                                placeholder='Number'
                                                required />
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
                                                                onChange={"handlecity"}
                                                                required
                                                                placeholder='City name' />

                                                            <div className="invalid-feedback"> Please provide a valid city.</div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-md-6 mt-4 ps-4">
                                                    {open && (
                                                        <div className=" input-group has-validation">
                                                            <input type="text"
                                                                className="form-control"
                                                                id="validationCustom05"
                                                                onChange={"handlecntry"}
                                                                required
                                                                placeholder='Country' />
                                                            <div className="invalid-feedback">
                                                                Please provide your Country.
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-md-6 mt-4 pe-4">
                                                    {open && (
                                                        <div className="input-group has-validation">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="validationCustomUsername"
                                                                aria-describedby="inputGroupPrepend"
                                                                onChange={"handlelink"}
                                                                placeholder="Linkdin"
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
                                                                className="form-control"
                                                                id="validationCustomUsername"
                                                                aria-describedby="inputGroupPrepend"
                                                                onChange={"handleweb"}
                                                                placeholder="Website"
                                                                required
                                                            />
                                                            <div className="invalid-feedback">Please enter your phone number.</div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        <div className='pt-sm-3 d-flex align-items-center justify-content-center'>
                                            {open ? (<GrSubtractCircle />) : (<BiAlarmAdd />)}

                                            <a href="#" className="mt-0 text-primary ps-2 icon-link icon-link-hover"
                                                style={linkStyle} onClick={handletoggle} >
                                                {open ? 'Collapse Information' : 'Additional Information'}
                                            </a>
                                        </div>


                                    </div>
                                </form>

                                <button type="button" className="contbtnbanner2 mt-sm-4  mb-sm-2">
                                    Continue
                                </button>
                            </div>

                        </div>


                        <div className="col-md-5" style={{ backgroundColor: 'var(--bs-tenth)' }}>
                            <img src={Tempdata[4].imgtemp1} alt="#" className='img-fluid' />

                            {/* <Resumeeditable /> */}

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
