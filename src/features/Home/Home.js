import React, { useEffect } from 'react';
import ProductCard from '../../components/product-card/ProductCard';
import TopHeader from './../../components/top-header/TopHeader';
import { useDispatch, useSelector } from 'react-redux';
import { productsAsync } from './ProductSlice';
import SpinLoader from '../../components/spin-loader/SpinLoader';

function Home(props) {
    const products = useSelector((state) => state.products.data)
    const [loading, setLoading] = React.useState(true)

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(productsAsync())
        setLoading(false)
    }, [dispatch])
    return (
        <>

            {
                loading ? <SpinLoader /> :
                    <>
                        <TopHeader />
                        <div className='container mt-5'>
                            <div className='row'>
                                {
                                    products?.map((ele) => {
                                        return <div className='col-md-4 mt-4 mb-4'>
                                            <ProductCard data={ele} key={ele.id} />
                                        </div>
                                    })
                                }


                            </div>
                        </div>
                    </>
            }

        </>
    );
}

export default Home;