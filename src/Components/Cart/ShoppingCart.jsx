import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Total from "./Total";
import "./shopcart.scss";
import { ToastContainer } from "react-toastify";

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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnHover
        hideProgressBar
      />
    </>
  );
};

export default ShoppingCart;
