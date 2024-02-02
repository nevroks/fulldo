import './App.css'

import {Route, Routes, useNavigate} from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage.tsx";
import {useEffect} from "react";

import Layout from "./components/layout/Layout.tsx";
import HomePage from "./pages/homepage/HomePage.tsx";
import {useSelector} from "react-redux";
import TodosPage from "./pages/todospage/TodosPage.tsx";
import TodoPage from "./pages/todopage/TodoPage.tsx";
import ProfilePage from "./pages/profilepage/ProfilePage.tsx";



function App() {
    const isAuth=useSelector(state => state.auth.value)
     console.log(isAuth)
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
            {isAuth && <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="profile" element={<ProfilePage/>}/>
                    <Route path="todos" element={<TodosPage/>}/>
                    <Route path="todos/:id" element={<TodoPage/>}/>
                </Route>}
        </Routes>
    </>
  )
}

export default App
