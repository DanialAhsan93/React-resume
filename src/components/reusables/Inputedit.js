import React from 'react';
import './inputedit.css';


export default function Inputedit({ placeholder, font, role, value, onChange, phone,email  }) {
    return (
        <>
            <input
                className='input-edit'
                type=""
                placeholder={placeholder}
                font={font}
                role={role}
                phone={phone}
                email={email}
                value={value}
                onChange={onChange}
                readOnly
            />

        </>
    )
}
