import React from 'react';
import { Route, Routes,Navigate } from "react-router-dom";
import SpinLoader from './../components/spin-loader/SpinLoader';

const Home = React.lazy(() => import('./../features/Home/Home'));
const SingleProducts = React.lazy(() => import('./../features/product-details/ProductDetails'));
const AllProducts = React.lazy(() => import('./../features/all-products/AllProducts'));
const Cart = React.lazy(() => import('./../features/cart/Cart'));
const Checkout = React.lazy(() => import('./../features/checkout/Checkout'));
const Contact = React.lazy(() => import('./../features/contact/Contact'));
const User = React.lazy(() => import('./../features/user/User'));
const Error404 = React.lazy(() => import('./../features/error/ErrorPage.js'));

function AppRoutes(props) {
    return (
        <>
            
            <React.Suspense fallback={<SpinLoader />}>
                <Routes>
                    <Route  path="/" element={<Home />} />
                    <Route  path="/single-products/:id" element={<SingleProducts />} />
                    <Route  path="/all-products" element={<AllProducts />} />
                    <Route  path="/cart" element={<Cart />} />
                    <Route  path="/contact" element={<Contact />} />
                    <Route  path="/checkout" element={<Checkout />} />
                    <Route  path="/user" element={<User />} />
                    <Route  path="*" element={<Error404/>} />
                    {/* <Route render={() => <Navigate to="/error-404" />} /> */}
                </Routes>
            </React.Suspense>

        </>
    );
}

export default AppRoutes;