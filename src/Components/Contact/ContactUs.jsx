import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { TfiLocationPin } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import "./contactus.scss";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="contactpage">
      <Container fluid className="contact">
        <div className="contact-us p-2">
          <Container className="p-2">
            <Row className="d-flex justify-content-center align-item-center">
              <h3 className="text-center mt-5 mb-5">GET IN TOUCH</h3>

              <Col md={4} className="text-center">
                <div className="d-flex justify-content-center align-item-center">
                  <div className="box mb-3">
                    <TfiLocationPin className="contact-icon" />
                  </div>
                </div>
                <h5>ADDRESS</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#">
                      <strong>Inglewood</strong>
                      <br />
                      840 Beaufort Street Inglewood
                    </Link>
                    <br />
                    Inglewood, WA 6052
                  </li>
                  <li>
                    {" "}
                    <Link to="#">
                      <strong>Victoria Park</strong>
                      <br />
                      419 Albany Highway Victoria Park{" "}
                    </Link>
                    <br />
                    Victoria Park WA 6001
                  </li>
                  <li>
                    <Link to="#">
                      <strong>Mosman Park</strong>
                      <br />
                      1/634 Stirling Highway Mosman Park
                    </Link>
                    <br />
                    Mosman Park WA 6012
                  </li>
                </ul>
              </Col>

              <Col md={4} className="text-center">
                <div className="d-flex justify-content-center align-item-center">
                  <div className="box mb-3">
                    <BsTelephone className="contact-icon " />
                  </div>
                </div>
                <h5>PHONE</h5>

                <ul className="list-unstyled">
                  <li>
                    <Link to="#">
                      <strong>General Enquiry</strong> <br />
                      +61 4 1313 2934
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <strong>Inglewood</strong>
                      <br />
                      +61 8 6161 9509
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <strong> Victoria Park</strong>
                      <br />
                      +61 8 6161 8645
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <strong> Mosman Park</strong> <br />
                      +61 8 6161 2290
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={4} className="text-center mb-3">
                <div className="d-flex justify-content-center align-item-center">
                  <div className="box mb-3 ">
                    <CiMail className="contact-icon" />
                  </div>
                </div>
                <h5>EMAIL</h5>
                <Link to="#" className="text-decoration-none text-white">
                  <strong>Email Address</strong> <br />
                  info@himalayanrestaurant.com.au
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      <Container fluid className="sign-in">
        <Row className="d-flex justify-content-center align-items-center py-5">
          <Col md={7}>
            <img
              src="https://img.freepik.com/free-vector/home-screen-concept-illustration_114360-4703.jpg?w=740&t=st=1669185388~exp=1669185988~hmac=548d8fcfa96d8cde0dd9faa5b98cc3a15ea2c3a3682ab404c93ed59d2411f72d"
              alt=""
              className="mt-3 mb-3"
            />
          </Col>
          <Col md={5}>
            <div className="login pb-4">
              <div className="login-box shadow-md bg-white p-4 mt-4">
                <h3 className="mb-3">
                  <b>Contact us</b>
                </h3>
                <Form>
                  <Form.Group className="mb-4" controlId="formBasicName">
                    <Form.Control
                      type="text"
                      className="fontAwesome"
                      placeholder="&#xf007; &nbsp; &nbsp;Name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      className="fontAwesome"
                      placeholder="&#xf0e0; &nbsp; &nbsp;Email"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      className="fontAwesome"
                      rows={3}
                      placeholder="Message..."
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    className="m-auto d-block w-100 mb-2"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="row map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.3723103160114!2d115.88146061473009!3d-31.923647828163794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32ba9162242cf3%3A0x87a86ba82d148567!2s840%20Beaufort%20St%2C%20Inglewood%20WA%206052%2C%20Australia!5e0!3m2!1sen!2snp!4v1666347678485!5m2!1sen!2snp"
          height="300"
          className="col-12"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          title="location"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
