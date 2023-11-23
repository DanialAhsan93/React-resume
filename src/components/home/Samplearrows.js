import React from 'react';
import './samplearrow.css'

export default function Samplearrows(props) {
    const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "var(--bs-primary)" }}
      onClick={onClick}
    />
  )
}
