import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./style.css"


function NavBar() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="React_Portfolio/#/">Sean Kirkpatrick</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav id={"NavLinks"}>
      <Nav.Link href="React_Portfolio/#/">About Me</Nav.Link>
      <Nav.Link href="React_Portfolio/#/projects">
        Projects
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default NavBar;