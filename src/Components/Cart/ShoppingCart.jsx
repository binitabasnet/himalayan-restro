import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Total from "./Total";
import "./shopcart.scss";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Container className="shop-cart mt-5 mb-5">
        <Row>
          <Col md={8}>
            <Card className="p-3">
              <h3>Your Cart</h3>
              {cart?.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </Card>
          </Col>
          <Col md={4}>
            <Total />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShoppingCart;
