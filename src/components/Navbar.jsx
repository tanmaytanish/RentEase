// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom";



// function NavScrollExample() {
//   return (
//     <Navbar fixed="top" expand="lg" className="bg-body-tertiary" style={{ backgroundColor: "beige" }}>
//       <Container fluid>
//         <Navbar.Brand href="#">
//           <img
//             src="logo.png" 
//             alt="Logo"
//             style={{ height: "40px", marginRight: "10px" }}
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
//             {/* <Nav.Link as={Link} to="./pages/Home.jsx">Home</Nav.Link> */}
//             {/* <Link to="./pages/Home.jsx" className="nav-link">Home</Link> */}
//             <Link to="/home" className="nav-link">Home</Link>
//             {/* <Link to="./pages/Services.jsx" className="nav-link">Services</Link> */}
//             {/* <Link to="./pages/AboutUs.jsx" className="nav-link">About Us</Link> */}
//             {/* <Link to="./pages/Login.jsx" className="nav-link">Login</Link> */}
//             <Link to="/login" className="nav-link">Login</Link>
//             {/* <Link to="./pages/Register.jsx" className="nav-link">Register</Link> */}
//             {/* <Nav.Link href="#action1">Services</Nav.Link>
//             <Nav.Link href="#action1">About Us</Nav.Link>
//             <Nav.Link href="./pages/Login.jsx">Login</Nav.Link>
//             <Nav.Link href="#action2">Register</Nav.Link> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;


import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";
import "../styles/Navbar.css"; // Adjust the path as necessary

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          MyLogo
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/register" className="nav-link">Register</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
