import React from 'react';
import { Route, Routes } from "react-router-dom";
import SpinLoader from './../components/spin-loader/SpinLoader';

const Home = React.lazy(() => import('./../features/Home/Home'));
const SingleProducts = React.lazy(() => import('./../features/product-details/ProductDetails'));
const AllProducts = React.lazy(() => import('./../features/all-products/AllProducts'));


function AppRoutes(props) {
    return (
        <>
            
            <React.Suspense fallback={<SpinLoader />}>
                <Routes>
                    <Route  path="/" element={<Home />} />
                    <Route  path="/single-products/:id" element={<SingleProducts />} />
                    <Route  path="/all-products" element={<AllProducts />} />
                </Routes>
            </React.Suspense>

        </>
    );
}

export default AppRoutes;