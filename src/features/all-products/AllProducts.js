import React from 'react';
import TopHeader from '../../components/top-header/TopHeader';
import { useSelector } from 'react-redux';
import SkeletonProductCard from '../../components/product-card/SkeletonProductCard';
import ProductCard from '../../components/product-card/ProductCard';
import ReactPaginate from "react-paginate";
import './style.scss'

function AllProducts(props) {
    const allProducts = useSelector((state) => state.products.data);
    const [searchTerm, setSearchTerm] = React.useState("");

    const [pageNumber, setPageNumber] = React.useState(0);

    const searchedProduct = allProducts.filter((item) => {
        if (searchTerm.value === "") {
            return item;
        }
        if (item.category.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        } else {
            return console.log("not found");
        }
    });

    const productPerPage = 9;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(
        visitedPage,
        visitedPage + productPerPage
    );

    const pageCount = Math.ceil(searchedProduct.length / productPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <TopHeader />
            <div className='container mt-4'>
                <h2>All Products List</h2>
                <div className='row'>
                    <div className='col-md-4 mt-3 mb-3'>
                        <input type="text"
                            className='form-control'
                            placeholder='Search items'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className='row'>
                    {
                        allProducts.length === 0 ? (
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

                                displayPage?.map((ele) => {
                                    return <div className='col-md-4 mt-4 mb-4'>
                                        <ProductCard data={ele} key={ele?.id} />
                                    </div>
                                })
                            )
                    }
                    {
                        displayPage.length === 0 ? <div className='col-md-12'>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60px", marginTop: "30px", background: "#80808040", borderRadius: "10px" }}> <h5>NO DATA FOUND</h5></div>
                        </div> : null
                    }

                    {
                        displayPage.length === 0 ? null : <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel={"Prev"}
                                nextLabel={"Next"}
                                containerClassName=" paginationBttns "
                            />
                        </div>
                    }


                </div>
            </div>
        </>
    );
}

export default AllProducts;