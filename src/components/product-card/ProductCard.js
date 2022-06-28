import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({data}) {
    let navigate = useNavigate();
    return (
        
        <div className="card h-100 text-center p-4">
            <img className="card-img-top" src={data.image} alt="Card" height="250"/>
                <div className="card-body">
                    <h4 className="card-title">{data.category}</h4>
                    <p className="card-text">{"$"}{data.price}</p>
                    <button className='btn btn-sm btn-primary'>Add to Cart</button>
                    <button className="btn btn-link" onClick={()=>navigate(`/single-products/${data.id}`)}>view</button>
                   
                </div>
        </div>
    );
}

export default ProductCard;