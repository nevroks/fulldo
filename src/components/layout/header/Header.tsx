import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./style.module.css";
const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <header className={classes.header}>
            <nav className={classes.header__content}>
                <div className={classes.header__content__links}>
                    <NavLink to={"/"}>Homepage</NavLink>
                    <NavLink to={"/todos"}>Todos</NavLink>
                </div>
                <div>
                    <h3>Hello "{user.login}"!</h3>
                </div>
            </nav>
        </header>
    );
};

export default Header;