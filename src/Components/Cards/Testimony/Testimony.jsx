import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./testimony.scss";

const Testimony = () => {
  return (
    <Container className="testimony-card mb-5">
      <div className="header text-center mb-5">
        <p>Testimonials</p>
        <h1>
          What People Say <span>About</span>{" "}
        </h1>
      </div>

      <Row className="testimony-content">
        <Col md={4}>
          <Card>
            <Row className="p-3">
              <Col md={5} className="m-auto">
                <div className="testimony-img">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    alt="test"
                  />
                </div>
              </Col>
              <Col md={7}>
                <h4 className="mb-0">Robert K.</h4>
                <span className="text-muted">Customer</span>
                <p className="mt-3 txt-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Corporis
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Row className="p-3">
              <Col md={5} className="m-auto">
                <div className="testimony-img">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    alt="test"
                  />
                </div>
              </Col>
              <Col md={7}>
                <h4 className="mb-0">Robert K.</h4>
                <span className="text-muted">Customer</span>
                <p className="mt-3 txt-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Corporis
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Row className="p-3">
              <Col md={5} className="m-auto">
                <div className="testimony-img">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    alt="test"
                  />
                </div>
              </Col>
              <Col md={7}>
                <h4 className="mb-0">Robert K.</h4>
                <span className="text-muted">Customer</span>
                <p className="mt-3 txt-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Corporis
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimony;
