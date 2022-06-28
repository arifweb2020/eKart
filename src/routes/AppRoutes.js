import React from 'react';
import { Route, Routes } from "react-router-dom";
import SpinLoader from './../comonents/spin-loader/SpinLoader';

const Home = React.lazy(() => import('./../features/Home/Home'));

function AppRoutes(props) {
    return (
        <>
            
            <React.Suspense fallback={<SpinLoader />}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </React.Suspense>

        </>
    );
}

export default AppRoutes;