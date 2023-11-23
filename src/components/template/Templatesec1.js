import React, { useState } from 'react';
import { Tempdata } from './Tempdata';
import './templatesec1.css';
import { AiOutlineEye } from 'react-icons/ai'
import { SiClickup } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { manageIndex } from '../../redux/actions/Actions';
import { useDispatch, useSelector } from 'react-redux';


export default function Templatesec1(props) {
    const [visible, setvisible] = useState(3);
    const showmoreitems = () => {
        setvisible((prevValue) => prevValue + 3)         // type of pagination
    }
    const dataLength = Tempdata.length;
    const hasMoreData = visible < dataLength;

    const navigate = useNavigate()

    const dispatch = useDispatch()


    const index = useSelector((state) => state.indexReducer.tempId);

    const setIndexInStore = (index) => {
        dispatch(manageIndex(index));
        localStorage.setItem('tempId', index)
    };

    const gotoCVvisitsec1 = (index) => {
        setIndexInStore(index);
        // localStorage.setItem('tempId', index);
        navigate('/CV', { state: { tempId: index } });
    };


    return (
        <>
            <div className="container-fluid py-sm-5 py-5 ">
                <div className="container py-md-5">
                    <div className="row justify-content-sm-between justify-content-center">
                        {Tempdata.slice(0, visible).map((item, index) => (
                            <div key={item.id} className="col-sm-3 col-10 m-md-3 py-sm-0 py-2 img-temp">
                                <div className="image-container">
                                    <img src={item.imgtemp1} alt="#" className="img-fluid" />
                                    <div className="shutter-overlay"></div>
                                    <div className="card-temp1">
                                        <div>
                                            <h3>
                                                <AiOutlineEye className="icon-tsec2" />
                                            </h3>

                                        </div>
                                        <div className="pt-2">
                                            <h3 onClick={() => gotoCVvisitsec1(index)}>
                                                <SiClickup className="icon-tsec2" />
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="d-flex justify-content-center">
                            <div className="col-sm-3 text-center">
                                {hasMoreData && (
                                    <button type="button" className="contbtnbanner2 mt-sm-3 mb-sm-2" onClick={showmoreitems}>
                                        Show More
                                    </button>
                                )}
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <Link to='/templatesec1'></Link>

        </>
    )
}
