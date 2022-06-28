import React from 'react';
import SkeletonLoader from '../skeleton/SkeletonLoader';

function SkeletonSingleProduct(props) {
    return (
        <div className='row mt-5'>
            <div className='col-md-4'>
                <SkeletonLoader height="300px"/>
            </div>
            <div className='col-md-8'>
                <h4><SkeletonLoader /></h4>
                <h5><SkeletonLoader /></h5>
                <p><SkeletonLoader count={5}/></p>
                <p><SkeletonLoader /></p>
            </div>


        </div>
    );
}

export default SkeletonSingleProduct;