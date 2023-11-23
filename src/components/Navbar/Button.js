import React from 'react';
import './button.css';

export default function Button(props) {
    return (
        <>
                <button type="button" className="get-button fw-semibold">{props.text}</button>
        </>
    )
}
