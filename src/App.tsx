import './App.css'

import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage.tsx";

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
