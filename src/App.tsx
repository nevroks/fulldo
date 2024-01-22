import './App.css'

import {Route, Routes, useNavigate} from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage.tsx";
import {useContext, useEffect} from "react";

import Layout from "./components/layout/Layout.tsx";
import HomePage from "./pages/homepage/HomePage.tsx";
import {useSelector} from "react-redux";



function App() {
    const isAuth=useSelector(state => state.auth)

    const navigate = useNavigate()
    useEffect(()=>{
        if(isAuth===false){
            navigate("/login")
        }
    },[isAuth])
  return (
    <>
        <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"login"} element={<LoginPage/>}/>
                </Route>
        </Routes>
    </>
  )
}

export default App
