import {useState} from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Route,Routes } from "react-router-dom";   
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import OwnerDashboard from "./pages/OwnerDashboard";
import TenantDashboard from "./pages/TenantDashboard";


function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/register" element={<Signup/>} />
                {/* <Route path="/" element={<Home/>}/> */}
            </Routes>
<OwnerDashboard />
            <Footer />
            
        </>
    );
}

export default App;