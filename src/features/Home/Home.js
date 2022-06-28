import React from 'react';
import ProductCard from '../../components/product-card/ProductCard';
import TopHeader from './../../components/top-header/TopHeader';
import { useDispatch, useSelector } from 'react-redux';
import { productsAsync } from './ProductSlice';
import SkeletonProductCard from './../../components/product-card/SkeletonProductCard';

function Home(props) {
    const products = useSelector((state) => state.products.data)

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(productsAsync())
    }, [dispatch])
    return (
        <>
            <TopHeader />


            <div className='container mt-5'>
                <div className='row'>

                    {
                        !products ? (
                            <>
                                {
                                    [...Array(12)].map((_, i) => {
                                        return <div className='col-md-4 mt-4' key={i}>
                                            <SkeletonProductCard />
                                        </div>
                                    })
                                }

                            </>
                        )
                            : (
                                products?.map((ele) => {
                                    return <div className='col-md-4 mt-4 mb-4'>
                                        <ProductCard data={ele} key={ele.id} />
                                    </div>
                                })
                            )
                    }

                </div>
            </div>
        </>
    );
}

export default Home;