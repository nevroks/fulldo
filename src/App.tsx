import './App.css'

import {Route, Routes, useNavigate} from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage.tsx";
import {lazy, useEffect} from "react";

import Layout from "./components/layout/Layout.tsx";

const HomePage = lazy(()=>import("./pages/homepage/HomePage.tsx"))
const TodosPage = lazy(()=>import("./pages/todospage/TodosPage.tsx"))
const TodoPage = lazy(()=>import("./pages/todopage/TodoPage.tsx"))
const ProfilePage = lazy(()=>import("./pages/profilepage/ProfilePage.tsx"))
import {useAppSelector} from "./hooks/reduxHooks.ts";



function App() {
    const isAuth=useAppSelector(state => state.auth.value)
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
