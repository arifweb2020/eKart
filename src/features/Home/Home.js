import React from 'react';
import ProductCard from '../../components/product-card/ProductCard';
import { useDispatch } from 'react-redux';
import { productsAsync } from './ProductSlice';
import SkeletonProductCard from './../../components/product-card/SkeletonProductCard';
import './style.scss';
import Shoping from './../../assets/images/shop.png'
import Footer from '../../components/footer/Footer';


function Home(props) {
    //const products = useSelector((state) => state.products.data)
    const [products, setAllProducts] = React.useState([]);
    const [filterData, setFilterData] = React.useState(products);
    const [category, setCategory] = React.useState("All");

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(productsAsync()).then((res) => {
            // console.log(JSON.stringify(res))
            setAllProducts(res?.payload)
            setFilterData(res?.payload)
        })
    }, [dispatch])

    // React.useEffect(() => {
    //     if (category === "ALL") {
    //       setFilterData(products);
    //     }

    //     if (category === "men's clothing") {
    //       const filteredProducts = filterData.filter(
    //         (item) => item.category === "men's clothing"
    //       );

    //       setAllProducts(filteredProducts);
    //     }

    //     if (category === "women's clothing") {
    //       const filteredProducts = filterData.filter(
    //         (item) => item.category === "women's clothing"
    //       );

    //       setAllProducts(filteredProducts);
    //     }

    //     if (category === "jewelery") {
    //       const filteredProducts = filterData.filter(
    //         (item) => item.category === "jewelery"
    //       );

    //       setAllProducts(filteredProducts);
    //     }
    //     if (category === "electronics") {
    //       const filteredProducts = filterData.filter(
    //         (item) => item.category === "electronics"
    //       );

    //       setAllProducts(filteredProducts);
    //     }
    //   }, [category, filterData, products]);

    const filterProducts = (prod) => {
        //setLaoding(true)
        // console.log(prod)
        const prodData = products.filter(val => val.category === prod)
        //  const selection = data.find(val => val.category === prod)
        // console.log(selection.category + prod)
        setFilterData(prodData)
        setCategory(prod)
        // setLaoding(false)

    }

    return (
        <>
            <div className="bgImage">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 mt-2 mb-5'>
                            <img src={Shoping} alt="img" className='img-fluid' />
                            <h1 >Welcome to <br />Arif E-kart</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container mt-5 mb-5'>
                <div className='row mb-view'>


                    {/* <button
                                className={`all__btn  ${category === "ALL" ? "btn btn-sm btn-primary" : "btn btn-sm btn-secondary"
                                    } `}
                                onClick={() => setCategory("ALL")}
                            >
                                All
                            </button>
                            <button
                                className={`all__btn  ${category === "men's clothing" ? "btn btn-sm btn-primary" : "btn btn-sm btn-secondary"
                                    } `}
                                onClick={() => setCategory("men's clothing")}
                            >
                                Mens
                            </button>
                            <button
                                className={`all__btn  ${category === "women's clothing" ? "btn btn-sm btn-primary" : "btn btn-sm btn-secondary"
                                    } `}
                                onClick={() => setCategory("women's clothing")}
                            >
                                Womens
                            </button>
                            
                            <button
                                className={`all__btn  ${category === "jewelery" ? "btn btn-sm btn-primary" : "btn btn-sm btn-secondary"
                                    } `}
                                onClick={() => setCategory("jewelery")}
                            >
                                jewelery
                            </button>
                            <button
                                className={`all__btn  ${category === "electronics" ? "btn btn-sm btn-primary" : "btn btn-sm btn-secondary"
                                    } `}
                                onClick={() => setCategory("electronics")}
                            >
                                Electronics
                            </button> */}
                    
                    <div className='col-md-2 offset-md-1 col-6'><button type="button" className={category === "All" ? " blackBtn fullWidth shadow-lg" : " greyBtn fullWidth"} onClick={() => setFilterData(products)}>All</button></div>
                    <div className='col-md-2 col-6'><button type="button" className={category === "men's clothing" ? " blackBtn fullWidth shadow-lg" : " greyBtn fullWidth"} onClick={() => filterProducts("men's clothing")}>men's clothing</button></div>
                    <div className='col-md-2 col-6'><button type="button" className={category === "women's clothing" ? " blackBtn fullWidth shadow-lg" : " greyBtn fullWidth"} onClick={() => filterProducts("women's clothing")}>women's clothing</button></div>
                    <div className='col-md-2 col-6'><button type="button" className={category === "jewelery" ? " blackBtn fullWidth shadow-lg" : " greyBtn fullWidth"} onClick={() => filterProducts("jewelery")}>Jewelery</button></div>
                    <div className='col-md-2 col-6'> <button type="button" className={category === "electronics" ? " blackBtn fullWidth shadow-lg" : " greyBtn fullWidth"} onClick={() => filterProducts("electronics")}>Electronics</button></div>
                

                </div>
                <div className='row'>

                    {
                        filterData.length === 0 ? (
                            <>
                                {
                                    [...Array(12)].map((_, i) => {
                                        return <div className='col-lg-3 col-md-4  mt-4' key={i}>
                                            <SkeletonProductCard />
                                        </div>
                                    })
                                }

                            </>
                        )
                            : (
                                filterData?.map((ele) => {
                                    return <div className='col-lg-3 col-md-4  mt-5 mb-4'>
                                        <ProductCard data={ele} key={ele?.id} />
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

export default Home;