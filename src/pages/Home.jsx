import {useState} from "react";
// import { Box, Flex, Spacer } from "@chakra-ui/react";
import {Box, Button, Flex, Heading, Text, Image, Spacer} from "@chakra-ui/react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <>
            <Box minH="100vh" display="flex" flexDirection="column" width="100vw">
                {/* Main Content */}
                <Flex flex="1" width="100%" px={16} py={12} align="center" justify="center">
                    {/* Left Section - Text */}
                    <Box width="50%" textAlign="left">
                        <Heading size="xl" mb={4} fontFamily="'Poppins', sans-serif">
                            Worried about Managing your property in India?
                        </Heading>
                        <Text fontSize="lg" mb={6} fontFamily="'Poppins', sans-serif">
                            We can help. Sign up with Housewise and avail the best rental property management services
                            in your Locality.
                        </Text>
                    </Box>

                    {/* Spacer Div */}
                    <Box width="8" />

                    {/* Right Section - Image */}
                    <Box width="50%" display="flex" justifyContent="center" alignItems="center">
                        <Image src="src\images\banner.webp" alt="Home Image" borderRadius="md" />
                    </Box>
                </Flex>
            </Box>
        </>
    );
}
export default Home;
