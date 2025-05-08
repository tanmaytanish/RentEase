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
import AddProperty from "./pages/AddProperty";
import PropertyPage from "./pages/PropertyPage"; // Assuming you have a PropertyPage component


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
                <Route path="/add-property" element={<AddProperty />} />
                <Route path="/owner-dashboard" element={<OwnerDashboard />} />
                {/* <Route path="/" element={<Home/>}/> */}
            </Routes>
            <PropertyPage />
            <Footer />
            
        </>
    );
}

export default App;