import {useState} from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import {Box, Flex, Spacer} from "@chakra-ui/react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            <Navbar />
            <Home/>
            
        </>
    );
}

export default App;
