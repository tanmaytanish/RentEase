import {useState} from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/pages/Signup";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            <Navbar />
            <Home/>
            <Signup/>
            
            
        </>
    );
}

export default App;
