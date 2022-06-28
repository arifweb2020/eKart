import React from 'react';

function SingleProduct({ singleData }) {
    return (
        <div className='row mt-5'>
            <div className='col-md-4'>
                <img src={singleData?.image} alt="img" className='img-fluid' style={{height:"400px"}}/>
            </div>
            <div className='col-md-8'>
                <h4>{singleData?.title}</h4>
                <h5>{"$"}{singleData?.price}</h5>
                <p>{singleData?.description}</p>
                <p>Rating : {singleData?.rating?.rate}</p>
            </div>


        </div>
    );
}

export default SingleProduct;