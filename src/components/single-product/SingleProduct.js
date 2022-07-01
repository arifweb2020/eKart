import React from 'react';
import { cartActions } from './../../app/extraReducer/cartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SingleProduct({ singleData }) {
    const dispatch = useDispatch()

    const addtoCart = (item) => {
        //  console.log(item)
        dispatch(cartActions.addItem(item))
        toast.success("your item added successfully", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            pauseOnHover: false,
        })
    }
    return (
        <div className='row mt-5'>
            <div className='col-md-4'>
                <img src={singleData?.image} alt="img" className='img-fluid' style={{ height: "400px" }} />
            </div>
            <div className='col-md-8'>
                <h4>{singleData?.title}</h4>
                <h5>{"$"}{singleData?.price}</h5>
                <p>{singleData?.description}</p>
                <p>Rating : {singleData?.rating?.rate}</p>
                <button className='btn btn-sm btn-primary' style={{background:"#3f51b5",border:"none"}} onClick={() => addtoCart(singleData)}>Add to Cart</button>
            </div>

            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
            />
        </div>
    );
}

export default SingleProduct;