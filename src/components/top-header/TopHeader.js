import React from 'react';
import './style.scss'

function TopHeader({heading,subheading}) {
    return (
        <div className="container-fluid p-5 text-white text-center top-header">
            <h1>{heading}</h1>
            <p>{subheading}</p>
        </div>
    );
}

export default TopHeader;