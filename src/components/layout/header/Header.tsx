import {Link, NavLink} from "react-router-dom";
import classes from "./style.module.css";
import {FaPencilAlt} from "react-icons/fa";
import useLocalStorage from "../../../hooks/UseLocalStorage.ts";

const Header = () => {
    // @ts-ignore
    const {login: login} = useLocalStorage({method: "get", key: "user"})
    // @ts-ignore
    const setActive:({isActive:boolean})=>string=({isActive})=>isActive ? classes.active : classes.header__link
    return (
        <header className={classes.header}>
            <nav className={classes.header__content}>
                <div className={classes.header__content__links}>
                    <NavLink className={setActive} to={"/"}>Homepage</NavLink>
                    <NavLink className={setActive} to={"/todos"}>Todos</NavLink>
                </div>
                <div className={classes.header__profile}>
                    <h3>Hello "{login}"!</h3>
                    <Link to={"/profile"}><FaPencilAlt /></Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;