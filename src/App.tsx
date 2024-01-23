import './App.css'

import {Route, Routes, useNavigate} from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage.tsx";
import {useEffect} from "react";

import Layout from "./components/layout/Layout.tsx";
import HomePage from "./pages/homepage/HomePage.tsx";
import {useSelector} from "react-redux";



function App() {
    const isAuth=useSelector(state => state.auth.value)

    const navigate = useNavigate()
    useEffect(()=>{
        if(isAuth===false){
            navigate("/login")
        }
    },[isAuth])
  return (
    <>
        <Routes>
            <Route path={"/login"} element={<LoginPage/>}/>
            {isAuth && <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                </Route>}
        </Routes>
    </>
  )
}

export default App
