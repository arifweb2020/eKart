import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cartActions } from './../../app/extraReducer/cartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProductCard({ data }) {
    //  const { id, title, image, price } = props.data;
    let navigate = useNavigate();
    const dispatch = useDispatch()

    const addtoCart = (item) => {
        //  console.log(item)
        //   dispatch(
        //     cartActions.addItem({
        //       id,
        //       title,
        //       image,
        //       price,
        //     })
        //   );
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

        <div className="card h-100 text-center p-4">
            <img className="card-img-top" src={data.image} alt="Card" height="250" />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{"$"}{data.price}</p>
                <button className='btn btn-sm btn-primary' onClick={() => addtoCart(data)}>Add to Cart</button>
                <button className="btn btn-link" onClick={() => navigate(`/single-products/${data.id}`)}>view</button>

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

export default ProductCard;