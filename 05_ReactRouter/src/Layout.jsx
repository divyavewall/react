import Header from "./components/Header/Header";
import React from 'react';
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";


//outlet acts as a base keeps the layout same change things dynamically in between.
function Layout(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;