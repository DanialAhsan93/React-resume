import React from 'react';
import './textedit.css';

export default function Textedit({  value, onChange }) {
    return (
        <>
            <input
                className='text-edit'
                value={value}
                onChange={onChange}
                readOnly
            >
            </input>


        </>
    )
}
