import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./shopcart.scss";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";

const ShoppingCart = () => {
  return (
    <>
      <Container className="shop-cart mt-5">
        <Row>
          <Col md={8}>
            <Card className="p-3">
              <h3>Your Cart</h3>
              <Card className="p-2 mb-3 ">
                <Row className="d-flex justify-content-center align-items-center">
                  <Col md={3}>
                    <img
                      src="https://media.istockphoto.com/id/682923236/photo/grilled-chicken-breast-with-potatoes-and-vegetables-salad.jpg?b=1&s=170667a&w=0&k=20&c=UPDPDVku1ysTkGgQL4IjyOHJH7x0fYpiTuGuPXt4NUM="
                      alt="cart-img"
                    />
                  </Col>
                  <Col md={3} className="p-1 text-center">
                    <h4 className="mb-0 mt-4">Chicken</h4>
                    <p className="text-muted">lorem ipsum dot </p>
                  </Col>
                  <Col md={2} className="p-1 text-center">
                    <Row className="increment">
                      <Col md={3}>
                        <strong>
                          <GrFormSubtract />
                        </strong>
                      </Col>
                      <Col md={6} className="d-flex justify-content-center">
                        <strong>4</strong>
                      </Col>
                      <Col md={3}>
                        <strong>
                          <IoMdAdd />
                        </strong>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={2} className="p-1 text-center">
                    <span>$ 20</span>
                  </Col>
                  <Col md={2} className="p-1 text-center">
                    <strong>X</strong>
                  </Col>
                </Row>
              </Card>
              <Card className="p-2 mb-3">
                <Row className="d-flex justify-content-center align-items-center">
                  <Col md={3}>
                    <img
                      src="https://media.istockphoto.com/id/682923236/photo/grilled-chicken-breast-with-potatoes-and-vegetables-salad.jpg?b=1&s=170667a&w=0&k=20&c=UPDPDVku1ysTkGgQL4IjyOHJH7x0fYpiTuGuPXt4NUM="
                      alt="cart-img"
                    />
                  </Col>
                  <Col md={3} className="p-1 text-center">
                    <h4 className="mb-0 mt-4">Chicken</h4>
                    <p className="text-muted">lorem ipsum dot </p>
                  </Col>
                  <Col md={2} className="p-1 text-center">
                    <Row className="increment">
                      <Col md={3}>
                        <strong>
                          <GrFormSubtract />
                        </strong>
                      </Col>
                      <Col md={6} className="d-flex justify-content-center">
                        <strong>4</strong>
                      </Col>
                      <Col md={3}>
                        <strong>
                          <IoMdAdd />
                        </strong>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={2} className="p-1 text-center">
                    <span>$ 20</span>
                  </Col>
                  <Col md={2} className="p-1 text-center">
                    <strong>X</strong>
                  </Col>
                </Row>
              </Card>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3">
              <h3>Cart Summary</h3>
              <Row>
                <Col md={9}>
                  <ul className="list-unstyled">
                    <li>Total Quantity</li>
                    <li>Total Price</li>
                    <li>DeliveryCharges</li>
                  </ul>
                </Col>
                <Col md={3}>
                  <ul className="list-unstyled">
                    <li>5 items</li>
                    <li>$ 20</li>
                    <li>$ 5</li>
                  </ul>
                </Col>
                <hr />
              </Row>
              <Row>
                <Col md={9}>
                  <h6>SubTotal</h6>
                </Col>
                <Col md={3}>
                  <span>$ 25</span>
                </Col>
              </Row>
              <Button className="m-auto">Proceed To Checkout</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShoppingCart;
