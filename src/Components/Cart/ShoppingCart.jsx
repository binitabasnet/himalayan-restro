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
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import Total from "./Total";
import "./shopcart.scss";
import { toast, ToastContainer } from "react-toastify";
import { removeAll } from "../../Redux/cartSlice";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemoveAll = (product) => {
    toast.success("all items removed");
    dispatch(removeAll(product));
  };

  const foods = cart.map((item) => item.id);
  return (
    <>
      <Container className="shop-cart mt-5 mb-5">
        <Row>
          <Col md={8}>
            <Card className="p-3">
              <h3>Your Cart</h3>
              {cart?.map((item) => (
                <>
                  <CartItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    description={item.description}
                  />
                </>
              ))}
            </Card>
            {cart.length > 0 ? (
              <Button
                className="mt-3 removeall"
                variant="outline-dark"
                onClick={() => dispatch(handleRemoveAll(foods))}
              >
                Remove All
              </Button>
            ) : (
              "No items to show"
            )}
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
