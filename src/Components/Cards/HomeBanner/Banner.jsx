import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="test">
      <Container className="banner-content">
        <Row className="d-flex justify-content-center align-items-center banner">
          <Col md={6}>
            <div className="text-detail">
              <h1>
                Himalayan Nepalese <span>Restaurant And Cafe</span> Inglewood
              </h1>
              <p className="mb-5">
                AUTHENTIC NEPALESE FOOD IN INGLEWOOD. DINE IN, TAKEAWAY &
                DELIVERY
              </p>

              <Button className="m-2 p-2">
                <span className="p-4">Order Now</span>
              </Button>
            </div>
          </Col>
          <Col md={6}>
            {/* <div className="ban-img"></div> */}
            <img
              src="https://img.freepik.com/free-photo/man-cook-holds-pan-with-vegetables-flying-air_613910-10109.jpg?w=740&t=st=1669285935~exp=1669286535~hmac=ce3847fba6b34bc6c42d12dba80943968e965596835e98640c4e49c8d604b252"
              alt="banner-img"
            />
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
