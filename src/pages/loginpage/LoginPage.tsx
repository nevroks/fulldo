import React from 'react';
import classes from "./style.module.css";
import Input from "../../components/ui/input/Input.tsx";
const LoginPage = () => {
    return (
        <div className={classes.page}>
            <form>
                <Input placeholder={"Login"}/>
                <Input placeholder={"Password"}/>
            </form>
        </div>
    );
};

export default LoginPage;