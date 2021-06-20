import React from 'react';
import logo from './paymeranglogo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

function NavBar() {
return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/statements">
        <img className="logo" src={logo} alt="paymeranglogo.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto navbar">
      <Nav.Link to="/new">New Statement</Nav.Link>
      <Nav.Link to="/statements">All Statements</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link to="#deets">Welcome, <strong className="navStr">User!</strong></Nav.Link>
      <Nav.Link eventKey={2} to="#memes">
        Log Out
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}

export default NavBar;