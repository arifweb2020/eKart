import React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { SingleProductSAsync } from './SingleProductSlice';
import SingleProduct from '../../components/single-product/SingleProduct';
import SkeletonSingleProduct from './../../components/single-product/SkeletonSingleProduct';
import ProductCard from '../../components/product-card/ProductCard';
import SkeletonProductCard from '../../components/product-card/SkeletonProductCard';
import { useNavigate } from 'react-router-dom';  
import TopHeader from '../../components/top-header/TopHeader';
import Footer from '../../components/footer/Footer';
import './style.scss'

function ProductDetails(props) {
    const { id } = useParams()
    const data = useSelector((state) => state.single_product.data)
    const allProducts = useSelector((state) => state.products.data)
    const navigate = useNavigate();

    const categoryData = allProducts?.filter((val) => {
        return val?.category === data?.category
    })

   // console.log("categoryData " + JSON.stringify(categoryData))

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(SingleProductSAsync(id))
    }, [dispatch, id])

    return (
        <>
        <TopHeader heading="Product Details"/>
        <div className='container mt-5 mb-5 pdCC'>
            <button onClick={()=>navigate(-1)} style={{background:"black",border:"none",color:"#fff"}} className="btn btn-sm  mb-3 ">Go Back</button>
            
            {!data ? <SkeletonSingleProduct />
                : <SingleProduct singleData={data} />
            }

            <div className='row mt-5'>
                <h2>Releated Products</h2>
                {
                        !data ? (
                            <>
                                {
                                    [...Array(6)].map((_, i) => {
                                        return <div className='col-lg-3 col-md-4 mt-4' key={i}>
                                            <SkeletonProductCard />
                                        </div>
                                    })
                                }
                                
                            </>
                        )
                            : (
                                categoryData?.map((ele) => {
                                    return <div className='col-lg-3 col-md-4 mt-4 mb-4'>
                                        <ProductCard data={ele} key={ele.id} />
                                    </div>
                                })
                            )
                    }
            </div>

        </div>
        <Footer/>
        </>
    );
}

export default ProductDetails;