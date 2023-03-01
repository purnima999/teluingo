import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPageManager from './pages/landingPage/landingPageManager';
import HomeManager from './pages/Home/homeManager';
import AuthComponents from './utils/authComponents';
import Lesson1Manager from './pages/lessons/lesson1/lesson1Manager';
import Draw from './pages/lessons/lesson1/draw';

function RouteCmp() {
    return (
        <>
            <BrowserRouter>
                <AuthComponents />
                {/* <Draw /> */}

                <Routes>
                    <Route path="/" element={<LandingPageManager />} />
                    <Route path="/Home" element={<HomeManager />} />
                    <Route path="/lesson1" element={<Lesson1Manager />} />


                    {/* <Route path="/:pageName" element={<PageNotFound />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default RouteCmp;