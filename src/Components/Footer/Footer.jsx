import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-section mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h4>Himalayan Restro</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
          </Col>
          <Col md={3}>
            <h4>Menu</h4>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Reservation</li>
              <li>Order now</li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Support</h4>
            <ul className="list-unstyled">
              <li>Get Help</li>
              <li>Contact us</li>
              <li>Feedback</li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Legal</h4>
            <ul className="list-unstyled">
              <li>Terms and condition</li>
              <li>Privacy and Policy</li>
              <li>Disclaimer</li>
            </ul>
          </Col>
        </Row>
        <div className="text-center copyright">
          <p className="p-4">Copyright &copy; 2022, All Rights Reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
