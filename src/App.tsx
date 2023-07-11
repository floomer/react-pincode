import React from 'react';
import PinCodeForm from "./pages/pinCodeForm";
import './styles/app.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
    return(
        <BrowserRouter>
        <div className={"App"}>
    <Routes>
        <Route path='/signup' element={<PinCodeForm/>}/>
        <Route path= '/signin' element={<Login/>}/>
    </Routes>
        </div>
        </BrowserRouter>
    );
};

export default App;