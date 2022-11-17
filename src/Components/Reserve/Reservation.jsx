import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./reserve.scss";

const Reservation = () => {
  return (
    <>
      <Row className="mt-5 d-flex justify-content-center align-items-center">
        <Col md={6} className="title-text">
          <Container className="reserve">
            <div>
              <span>TABLE BOOKING</span>
              <h1>
                Reserve Your <br /> Table
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Quo vel temporibus corrupti iste mollitia
              </p>
              <Button>Book now</Button>
            </div>
          </Container>
        </Col>
        <Col md={6} className="reserve-img"></Col>
      </Row>
    </>
  );
};

export default Reservation;
