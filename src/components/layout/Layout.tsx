import React from 'react';
import Header from "./header/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./footer/Footer.tsx";
import classes from "./style.module.css";
const Layout = () => {
    return (
        <div className={classes.layoutS}>
            <Header/>
            <div className={classes.page}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;