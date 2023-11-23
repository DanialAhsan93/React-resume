import React from 'react'
import './sampleprevarrow.css';
export default function Sampleprevarrow(props) {
    const { className, style, onClick } = props;

  return (
    <>
    <div
      className={className}
      style={{ ...style, display: "block", background: "var(--bs-primary)" }}
      onClick={onClick}
    />
    
    </>
  )
}
