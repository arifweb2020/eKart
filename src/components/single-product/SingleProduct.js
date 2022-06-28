import React from 'react';

function SingleProduct({ singleData }) {
    return (
        <div className='row mt-5'>
            <div className='col-md-6'>
                <img src={singleData?.image} alt="img" className='img-fluid' />
            </div>
            <div className='col-md-6'>
                <h4>{singleData?.title}</h4>
                <h5>{"$"}{singleData?.price}</h5>
                <p>{singleData?.description}</p>
                <p>{singleData?.rating?.rate}</p>
            </div>


        </div>
    );
}

export default SingleProduct;