import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import "./checkout.scss";

const CheckoutPage = () => {
  return (
    <>
      <Container className="checkout-page mt-5">
        <Row>
          <Col md={8}>
            <Card className="p-3">
              <h3 className="mb-3">Checkout</h3>
              <h4>Payment Detail</h4>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Enter Full Name"
                    required
                  />
                  <hr />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPhone">
                  <Form.Control
                    type="phone"
                    placeholder="Enter Phone Number"
                    required
                  />
                  <hr />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicCity">
                      <Form.Control type="text" placeholder="City" required />
                      <hr />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4" controlId="formBasicNumber">
                      <Form.Control
                        type="number"
                        placeholder="No of members"
                        required
                      />
                      <hr />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3"></Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CheckoutPage;
