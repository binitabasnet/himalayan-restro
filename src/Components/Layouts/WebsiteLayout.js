import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./websitelayout.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Footer from "../Footer/Footer";

const WebsiteLayout = ({ children }) => {
  return (
    <div className="home-page">
      <Navbar collapseOnSelect expand="lg" className="home">
        <Container>
          <Navbar.Brand href="/">
            <img src="images/logo-1.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <Nav.Link href="#features">Gallery</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              {/* <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="/menu">Order now</Nav.Link>
              <Nav.Link eventKey={2} href="/reserve">
                Reservation
              </Nav.Link>
              <Nav.Link href="/cart">
                <AiOutlineShoppingCart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>{children}</div>
      {/* footer here */}
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
