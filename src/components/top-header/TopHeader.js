import React from 'react';

function TopHeader({heading,subheading}) {
    return (
        <div className="container-fluid p-5 bg-primary text-white text-center">
            <h1>{heading}</h1>
            <p>{subheading}</p>
        </div>
    );
}

export default TopHeader;