import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import "./review.scss";

const Review = ({ id, name, description }) => {
  return (
    <>
      <Col md={4} key={id}>
        <Card className="mb-3">
          <Row className="p-3">
            {/* <Col md={5} className="m-auto">
                          <div className="testimony-img">
                            <img
                              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                              alt="test"
                            />
                          </div>
                        </Col>
                        <Col md={7}> */}
            <h4 className="mb-0">{name}</h4>
            <span className="text-muted">Customer</span>
            <p className="mt-3 txt-muted">{description}</p>
            {/* </Col> */}
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default Review;
