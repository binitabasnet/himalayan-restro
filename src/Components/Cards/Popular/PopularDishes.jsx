import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./populardishes.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/cartSlice";

const PopularDishes = ({ id, title, image, price }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Col md={3}>
        <Card className="mb-3">
          <Card.Title>
            <Card.Img variant="top" src={image} />
          </Card.Title>
          <Card.Body>
            <Card.Title>
              <div className="menu-title d-flex justify-content-between">
                <span>{title}</span>
                <img src="images/heart.png" alt="title" />
              </div>
            </Card.Title>
            <Card.Text>
              <div className="menu-title d-flex justify-content-between">
                <span>$ {price}</span>
                <img
                  src="images/trolley.png"
                  alt="cart-img"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id,
                        title,
                        image,
                        price,
                      })
                    )
                  }
                />
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default PopularDishes;
