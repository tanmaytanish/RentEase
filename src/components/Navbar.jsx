import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavScrollExample() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary" style={{ backgroundColor: "beige" }}>
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
            <Nav.Link href="#action1">Services</Nav.Link>
            <Nav.Link href="#action1">About Us</Nav.Link>
            <Nav.Link href="#action1">Login</Nav.Link>
            <Nav.Link href="#action2">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;


