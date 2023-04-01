import React from "react";
import { Button, Container } from "react-bootstrap";
import "./offers.scss";

const Offers = () => {
  return (
    <div className="offers">
      <Container className="mt-5">
        <div className="py-5">
          <h3 className="mt-5 mb-3">Happy Holidays !</h3>
          <h2 className="mb-3">Save 30% on all of your purchases. </h2>
          <Button className="mb-5">ORDER NOW</Button>
        </div>
      </Container>
    </div>
  );
};

export default Offers;
