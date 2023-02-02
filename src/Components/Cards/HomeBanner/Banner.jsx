import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="test">
      <Container className="banner-content">
        <Row className="d-flex justify-content-center align-items-center banner">
          <Col md={6}>
            <div className="text-detail">
              <h1>
                Himalayan <span>Nepalese </span>Restaurant And Cafe
              </h1>
              <p className="mb-5">
                AUTHENTIC NEPALESE CUISINE. DINE IN,
                <br /> TAKEAWAY & DELIVERY
              </p>

              <Button className="m-2 p-2">
                <Link to="/menu">
                  <span className="p-4">Order Now</span>
                </Link>
              </Button>
            </div>
          </Col>
          <Col md={6} className="info-image">
            <div className="ban-img"></div>
            <div className="ban-box">
              <div className="overlay">
                <div className="item-one">
                  <img src="images/biryani.png" alt="img-chicken" />
                </div>
                <div className="item-two">
                  <img
                    src="https://i.pinimg.com/originals/e2/cf/80/e2cf80720b6352fa9e9b91e9bcb77206.png"
                    alt="banner-img"
                    className=""
                  />
                </div>

                <div className="item-three">
                  <img
                    src="https://www.esakha.com/files/product/image/360/onion_paratha-removebg-800x800.png"
                    alt="burger"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* <div className="contact-cards">
        <Card></Card>
      </div> */}
      </Container>
    </div>
  );
};

export default Banner;
