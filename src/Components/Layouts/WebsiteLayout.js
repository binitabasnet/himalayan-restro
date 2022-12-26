import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./websitelayout.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const WebsiteLayout = ({ children }) => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <>
      <div className="position-relative">
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
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/aboutus">About Us</Nav.Link>
                <Nav.Link href="/contactus">Contact Us</Nav.Link>
                <Nav.Link href="/menu">Order now</Nav.Link>
                <Nav.Link eventKey={2} href="/reserve">
                  Reservation
                </Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/cart" className="icon-wrap">
                  <AiOutlineShoppingCart onClick={() => navigate("/cart")} />
                  <p>{getTotalQuantity() || 0}</p>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {children}
      </div>

      <Footer />
    </>
  );
};

export default WebsiteLayout;
