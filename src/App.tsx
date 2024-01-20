import './App.css'

import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage.tsx";
import {createContext, useContext, useState} from "react";


function App() {


  return (
    <>
              <Routes>
                <Route path={"/login"} element={<LoginPage/>}/>
              </Routes>
    </>
  )
}

export default App
