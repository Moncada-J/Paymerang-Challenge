import React from 'react';
import logo from './Logo/paymerang.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

function NavBar() {
return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/statements">
        <img className="logo" src={logo} alt="paymerang.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Navbar.Brand className="navSubtitle" to="/statements">
        My Dashboard 
      </Navbar.Brand>
      <Nav.Link to="/new">New Statement</Nav.Link>
      <Nav.Link to="/statements">All Statements</Nav.Link>
    </Nav>
    <hr />
    <Nav>
      <Nav.Link to="#deets" className="secondary-link">Welcome, <strong className="navStr">User!</strong></Nav.Link>
      <Nav.Link eventKey={2} to="#memes" className="secondary-link">
        Log Out
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}

export default NavBar;