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
                <p><SkeletonLoader width="100px" height="20px"/></p>
                <p><SkeletonLoader count={3}/></p>
                <p><SkeletonLoader width="100px" height="30px"/></p>
                <p><SkeletonLoader width="100px"  height="30px"/></p>
            </div>


        </div>
    );
}

export default SkeletonSingleProduct;