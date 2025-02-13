import { useState } from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <>
            <Container fluid className="d-flex justify-content-center align-items-center vh-100">
                <Row className="w-75">
                    {/* Left Box (60%) */}
                    <Col
                        md={7}
                        className="d-flex flex-column justify-content-center align-items-center rounded border border-primary p-4 bg-light"
                    >
                        <h3>About Us</h3>
                        <p>Hello this is me</p>
                    </Col>

                    {/* Vertical Line */}
                    <Col xs={1} className="d-flex justify-content-center align-items-center">
                        <div style={{ width: "2px", height: "80%", backgroundColor: "gray" }}></div>
                    </Col>

                    {/* Right Box (40%) */}
                    <Col
                        md={4}
                        className="d-flex flex-column justify-content-center align-items-center rounded border border-success p-4 bg-light"
                    >
                        <h3 className="mb-4">Get Started</h3>
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
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
