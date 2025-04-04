import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/Login.css"
import Navbar from "../components/Navbar";


function Login() {
  return (
    <div className='main'>
        <Navbar/>   
        <Col
    md={4}
    className="d-flex flex-column justify-content-center align-items-center rounded border border-success p-4 bg-light"
>
    <h3 className="mb-4">Login</h3>
    <Form className="w-100">
        <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Button variant="primary" className="w-100">
            Login
        </Button>

        {/* Sign Up Link */}
        <p className="mt-3 text-center">
            New User? <a href="/signup">Sign Up</a>
        </p>
    </Form>
</Col></div>
  )
}

export default Login