import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

import "./review.scss";

const Review = ({ id, name, description }) => {
  return (
    <>
      <div key={id} className="">
        <Card className="mb-3">
          <div className="p-3 text-center">
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
            <p className="mt-3">{description}</p>
            {/* </Col> */}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Review;
