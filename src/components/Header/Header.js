import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../assets/logo.png";
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" variant="light" className="py-3 navbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="TNP Officer Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#home" className="nav-link text-xl">Home</Nav.Link>
            <Nav.Link href="#internships" className="nav-link text-lg">Internships</Nav.Link>
            <Nav.Link href="#mock-tests" className="nav-link text-lg">Mock Tests</Nav.Link>
            <Nav.Link href="#learning" className="nav-link text-lg">Learning</Nav.Link>
            <Nav.Link href="#about" className="text-lg">About</Nav.Link>
          </Nav>
          <Button variant="outline-success" className='get-started-button'>Get Started</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
