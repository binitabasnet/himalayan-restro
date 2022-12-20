import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

import "./review.scss";
import customerreview from "../../Components/data/review.json";

const Review = () => {
  const review = () => {
    return customerreview.testimonials;
  };

  const [test, setTest] = useState([]);

  useEffect(() => {
    const allTest = review();
    setTest(allTest);
  }, []);

  return (
    <>
      {test.map((tests, k) => (
        <Col md={4} key={k}>
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
              <h4 className="mb-0">{tests.name}</h4>
              <span className="text-muted">Customer</span>
              <p className="mt-3 txt-muted">{tests.description}</p>
              {/* </Col> */}
            </Row>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Review;
