import React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { SingleProductSAsync } from './SingleProductSlice';
import SingleProduct from '../../components/single-product/SingleProduct';

function ProductDetails(props) {
    const { id } = useParams()
    const data = useSelector((state) => state.single_product.data)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(SingleProductSAsync(id))
    }, [dispatch, id])

    return (
        <div className='container mt-5'>
            <h1>ProductDetails</h1>
            <SingleProduct singleData={data}/>
        </div>
    );
}

export default ProductDetails;