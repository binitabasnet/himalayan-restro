import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./banner.scss";

const Banner = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center banner">
        <Col md={6}>
          <div className="text-detail">
            <h1>
              Himalayan Nepalese <span>Restaurant And Cafe</span> Inglewood
            </h1>
            <p className="mb-5">
              AUTHENTIC NEPALESE FOOD IN INGLEWOOD. DINE IN, TAKEAWAY & DELIVERY
            </p>

            <Button className="m-2 p-2">
              <span className="p-4">Order Now</span>
            </Button>
          </div>
        </Col>
        <Col md={6}>
          <img
            src="https://media.istockphoto.com/id/682923236/photo/grilled-chicken-breast-with-potatoes-and-vegetables-salad.jpg?b=1&s=170667a&w=0&k=20&c=UPDPDVku1ysTkGgQL4IjyOHJH7x0fYpiTuGuPXt4NUM="
            alt="banner-img"
          />
        </Col>
      </Row>
      <div className="contact-cards">
        <Card></Card>

      </div>
    </Container>
  );
};

export default Banner;
