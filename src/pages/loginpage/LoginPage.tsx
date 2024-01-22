import React, {useEffect, useState} from 'react';
import classes from "./style.module.css";
import Input from "../../components/ui/input/Input.tsx";
import Button from "../../components/ui/button/Button.tsx";

import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleAuth} from "../../store/auth/counterSlice.ts";

const LoginPage = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.auth.value)
    const dispatch = useDispatch()
    console.log(isAuth)
    useEffect(()=>{
            if (isAuth===true){
                navigate("/")
            }
            if (localStorage.getItem("user") !== null){
                dispatch(toggleAuth())
            }

        },)
    const [user,setUser]=useState({
        login:"",
        password:""
    })
    return (
        <div className={classes.page}>
            <h1>LoginPage</h1>
            <form className={classes.form}>
                <Input
                    value={user.login}
                    onChange={e=>setUser({...user,login:e.target.value})}
                    type={"text"}
                    placeholder={"Login"}/>
                <Input
                    value={user.password}
                    onChange={e=>setUser({...user,password:e.target.value})}
                    type={"password"}
                    placeholder={"Password"}/>
                <Button onClick={()=>{
                    localStorage.setItem("user",JSON.stringify(user))
                }}>Login</Button>
            </form>
        </div>
    );
};

export default LoginPage;