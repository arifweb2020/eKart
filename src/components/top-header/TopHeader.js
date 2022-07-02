import React from 'react';

function TopHeader({heading,subheading}) {
    return (
        <div className="container-fluid p-5 text-white text-center" style={{background: "#ff5722"}}>
            <h1>{heading}</h1>
            <p>{subheading}</p>
        </div>
    );
}

export default TopHeader;