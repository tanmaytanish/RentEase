import {useState} from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";

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
