import './App.css'

import {Route, Routes, useNavigate} from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage.tsx";
import {useContext, useEffect} from "react";
import {AuthContext} from "./providers/AuthProvider.tsx";
import Layout from "./components/layout/Layout.tsx";
import HomePage from "./pages/homepage/HomePage.tsx";



function App() {
    const {isAuthorized}=useContext(AuthContext)
    console.log(isAuthorized)
    const navigate = useNavigate()
    useEffect(()=>{
        if(isAuthorized===false){
            navigate("/login")
        }
    },[isAuthorized])
  return (
    <>
        <Routes>
            {isAuthorized ?
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                </Route>
                    :
                <Route path={"/"}>
                    <Route path={"login"} element={<LoginPage/>}/>
                </Route>}

        </Routes>
    </>
  )
}

export default App
