import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./work.scss";

const Work = () => {
  return (
    <Container className="work-section">
      <div className="header mb-5">
        <div className="text-center mb-3">
          <p>Our Services</p>
          <h1>
            How We <span>Work</span>
          </h1>
        </div>
      </div>
      <Row>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Title className="p-3">
              <Card.Img variant="top" src="images/shopping-bag.png" />
            </Card.Title>
            <Card.Body>
              <Card.Title>
                <span>Easy To Order</span>
              </Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Title className="p-3">
              <Card.Img variant="top" src="images/take-away.png" />
            </Card.Title>
            <Card.Body>
              <Card.Title>
                <span>Pick And Eat</span>
              </Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Title className="p-3">
              <Card.Img variant="top" src="images/valid.png" />
            </Card.Title>
            <Card.Body>
              <Card.Title>
                <span>Make Payment</span>
              </Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-3">
            <Card.Title className="p-3">
              <Card.Img variant="top" src="images/delivery-truck.png" />
            </Card.Title>
            <Card.Body>
              <Card.Title>
                <span>Fast Delivery</span>
              </Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
