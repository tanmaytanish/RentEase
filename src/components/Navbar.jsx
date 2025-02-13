// import { Box, Flex, Heading, Spacer, Button, Image } from "@chakra-ui/react";

// const Navbar = () => {
//   return (
//     <Box bg="blue.500" px={6} py={4} color="white">
//       <Flex alignItems="center">
//         {/* Logo */}
//         <Image src="/logo.png" alt="RentEase Logo" boxSize="40px" mr={4} />

//         {/* Company Name */}
//         <Heading size="md">RentEase</Heading>

//         <Spacer />

//         {/* Login Button */}
//         <a colorScheme="whiteAlpha" variant="outline">
//           Login
//         </a>
//       </Flex>
//     </Box>
//   );
// };

// export default Navbar;

// --------------------------------------------
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ backgroundColor: "beige" }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="logo.png" 
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>Link</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
