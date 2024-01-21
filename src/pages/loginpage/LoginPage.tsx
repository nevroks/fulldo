import React, {useContext, useEffect, useState} from 'react';
import classes from "./style.module.css";
import Input from "../../components/ui/input/Input.tsx";
import Button from "../../components/ui/button/Button.tsx";
import {AuthContext} from "../../providers/AuthProvider.tsx";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const {setIsAuthorized,isAuthorized}=useContext(AuthContext)
    useEffect(()=>{
            if (localStorage.getItem("user") !== null){
                setIsAuthorized(true)
                navigate("/homepage")
            }

        },[])
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