import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import "./booktable.scss";

const BookTable = () => {
  return (
    <Container className="book-table mt-5">
      <h3>Date and Time</h3>
      <Row>
        <Col md={8}>
          <Card className="p-3 mb-3">
            <Card.Title className="date-title">
              <h4>Sep 2022</h4>
              <strong>Next</strong>
            </Card.Title>
            <Card.Body>
              <div className="dates">
                <h5>Sun</h5>
                <span>7</span>
              </div>
              <div className="dates">
                <h5>Mon</h5>
                <span>8</span>
              </div>
              <div className="dates">
                <h5>Tue</h5>
                <span>9</span>
              </div>
              <div className="dates">
                <h5>Wed</h5>
                <span>10</span>
              </div>
              <div className="dates">
                <h5>Thurs</h5>
                <span>11</span>
              </div>
              <div className="dates">
                <h5>Fri</h5>
                <span>12</span>
              </div>
              <div className="dates">
                <h5>Sat</h5>
                <span>13</span>
              </div>
            </Card.Body>
          </Card>

          <Card className="p-3 mb-5">
            <Row className="time-select">
              <h4>Time</h4>
              <Col md={5}>
                <div className="time">
                  <p>07</p>
                  <span>:</span>
                  <p>15</p>
                  <div className="am-pm">
                    AM
                    <IoIosArrowDown />
                  </div>
                </div>
              </Col>
              <Col md={2}>
                <h4>TO</h4>
              </Col>
              <Col md={5}>
                <div className="time">
                  <p>07</p>
                  <span>:</span>
                  <p>15</p>
                  <div className="am-pm">
                    PM
                    <IoIosArrowDown />
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
          <h4>Contact Informations</h4>
          <Card className="p-3 mb-3">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Enter Full Name"
                  required
                />
                <hr />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPhone">
                <Form.Control
                  type="phone"
                  placeholder="Enter Phone Number"
                  required
                />
                <hr />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Control type="text" placeholder="City" required />
                    <hr />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-4" controlId="formBasicNumber">
                    <Form.Control
                      type="number"
                      placeholder="No of members"
                      required
                    />
                    <hr />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card>

          <Button className="d-block w-100 mt-2">Confirm Booking</Button>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <h3>Book A Table</h3>
            <div className="table-card">
              <div className="day">
                <span>1</span>
              </div>
              <div className="day">
                <span>2</span>
              </div>
              <div className="day">
                <span>3</span>
              </div>
              <div className="day">
                <span>4</span>
              </div>
              <div className="day">
                <span>5</span>
              </div>
              <div className="day">
                <span>6</span>
              </div>
              <div className="day">
                <span>7</span>
              </div>
              <div className="day">
                <span>8</span>
              </div>
            </div>
            <div className="text-center">
              <Button className="d-block w-100 mt-3">Done</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookTable;
