import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./reserve.scss";

const Reservation = () => {
  return (
    <>
      <div>
        <Row className="mt-5 mb-5 d-flex justify-content-center align-items-center">
          <Col md={6} className="title-text">
            <Container className="mx-5 px-5 reserve">
              <span>TABLE BOOKING</span>
              <h1>
                Reserve Your <br /> Table
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Quo vel temporibus corrupti iste mollitia
              </p>
              <Link to="/reserve">
                <Button>Book now</Button>
              </Link>
            </Container>
          </Col>
          <Col md={6} className="reserve-img"></Col>
        </Row>
      </div>
    </>
  );
};

export default Reservation;
