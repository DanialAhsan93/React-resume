import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FIELD_EDIT } from '../../../redux/actions/Actions';
import { useState } from 'react';
import { useEffect } from 'react';
import { identifierlarge } from '../Resumetemplate/Tempidentifier';

export default function Mainediting() {
    const [tempId, settempid] = useState(null)
    const [item, setitem] = useState(null)

    const dispatch = useDispatch()

    const handleFieldChange = (e, field) => {
        const value = e.target.value;
        dispatch(FIELD_EDIT(field, value));

    }

    //--------------------------------------

    // const location = useLocation([])
    // const tempId = location.state.tempId

    //------------------------------------

    useEffect(() => {
        const id = localStorage.getItem('tempId')

        if (id) {
            settempid(id)
        }

    }, [])

    useEffect(() => {
        if (tempId !== null) {
            const filteredItem = identifierlarge.find((item, index) => index === parseInt(tempId))
            setitem(filteredItem)
        }
    }, [tempId])

    // const id = useSelector((state) => state.indexReducer.tempId)

    // const item = identifier.filter((item, index) => index === id)


    return (
        <>
            <div>
                {/* {tempId === 1 && <Firsttemplarge />}
                {tempId === 2 && <Sectemplarge />}
                {tempId === 3 && <Thirdtemplarge />} */}
                {item}

            </div>



        </>
    )
}
