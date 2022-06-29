import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cartActions } from './../../app/extraReducer/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


function ProductCard({data}) {
    let navigate = useNavigate();
    const dispatch = useDispatch()

    const addtoCart = (item)=>{
      //  console.log(item)
        dispatch(cartActions.addItem(item))
    }

    return (
        
        <div className="card h-100 text-center p-4">
            <img className="card-img-top" src={data.image} alt="Card" height="250"/>
                <div className="card-body">
                    <h4 className="card-title">{data.category}</h4>
                    <p className="card-text">{"$"}{data.price}</p>
                    <button className='btn btn-sm btn-primary' onClick={()=>addtoCart(data)}>Add to Cart</button>
                    <button className="btn btn-link" onClick={()=>navigate(`/single-products/${data.id}`)}>view</button>
                   
                </div>
        </div>
    );
}

export default ProductCard;