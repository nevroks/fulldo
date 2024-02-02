import React from 'react';
import {Link, NavLink} from "react-router-dom";
import classes from "./style.module.css";
import {FaPencilAlt} from "react-icons/fa";
const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <header className={classes.header}>
            <nav className={classes.header__content}>
                <div className={classes.header__content__links}>
                    <NavLink to={"/"}>Homepage</NavLink>
                    <NavLink to={"/todos"}>Todos</NavLink>
                </div>
                <div className={classes.header__profile}>
                    <h3>Hello "{user.login}"!</h3>
                    <Link to={"/profile"}><FaPencilAlt /></Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;