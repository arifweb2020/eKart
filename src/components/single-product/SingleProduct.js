import React from 'react';
import { cartActions } from './../../app/extraReducer/cartSlice';
import { useDispatch } from 'react-redux';

function SingleProduct({ singleData }) {
    const dispatch = useDispatch()

    const addtoCart = (item)=>{
      //  console.log(item)
        dispatch(cartActions.addItem(item))
    }
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
                <button className='btn btn-sm btn-primary' onClick={()=>addtoCart(singleData)}>Add to Cart</button>
            </div>


        </div>
    );
}

export default SingleProduct;