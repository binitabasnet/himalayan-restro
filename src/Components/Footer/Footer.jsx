import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-section">
      <Container>
        <Row>
          <Col md={3}>
            <h4>Himalayan Restro</h4>
            <p>Serving authentic nepalese cuisine</p>
          </Col>
          <Col md={3}>
            <h4>Menu</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/aboutus">About us</Link>
              </li>
              <li>
                <Link to="/reserve">Reservation</Link>
              </li>
              <li>
                <Link to="/menu">Order now</Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Support</h4>
            <ul className="list-unstyled">
              <li>Get Help</li>
              <Link to="/contactus">
                <li>Contact us</li>
              </Link>

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
