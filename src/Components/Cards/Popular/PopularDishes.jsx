import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./populardishes.scss";

const PopularDishes = () => {
  return (
    <>
      <Container className="populardishes mt-5">
        <Row>
          <div className="text-center mb-5">
            <p>Featured Dishes</p>
            <h1>
              Our Best Selling <span>Dishes</span>{" "}
            </h1>
          </div>

          <Col md={3}>
            <Card className="mb-3">
              <Card.Title>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BAv1U5o2glBoq6ckDac94Cp4-BanPknFpg&usqp=CAU"
                />
              </Card.Title>
              <Card.Body>
                <Card.Title>
                  <div className="menu-title d-flex justify-content-between">
                    <span>Green Salad</span>
                    <img src="images/heart.png" alt="title" />
                  </div>
                </Card.Title>
                <Card.Text>
                  <div className="menu-title d-flex justify-content-between">
                    <span>$ 10</span>
                    <img src="images/trolley.png" alt="title" />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-3">
              <Card.Title>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BAv1U5o2glBoq6ckDac94Cp4-BanPknFpg&usqp=CAU"
                />
              </Card.Title>
              <Card.Body>
                <Card.Title>
                  <div className="menu-title d-flex justify-content-between">
                    <span>Green Salad</span>
                    <img src="images/heart.png" alt="title" />
                  </div>
                </Card.Title>
                <Card.Text>
                  <div className="menu-title d-flex justify-content-between">
                    <span>$ 10</span>
                    <img src="images/trolley.png" alt="title" />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-3">
              <Card.Title>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BAv1U5o2glBoq6ckDac94Cp4-BanPknFpg&usqp=CAU"
                />
              </Card.Title>
              <Card.Body>
                <Card.Title>
                  <div className="menu-title d-flex justify-content-between">
                    <span>Green Salad</span>
                    <img src="images/heart.png" alt="title" />
                  </div>
                </Card.Title>
                <Card.Text>
                  <div className="menu-title d-flex justify-content-between">
                    <span>$ 10</span>
                    <img src="images/trolley.png" alt="title" />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-3">
              <Card.Title>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BAv1U5o2glBoq6ckDac94Cp4-BanPknFpg&usqp=CAU"
                />
              </Card.Title>
              <Card.Body>
                <Card.Title>
                  <div className="menu-title d-flex justify-content-between">
                    <span>Green Salad</span>
                    <img src="images/heart.png" alt="title" />
                  </div>
                </Card.Title>
                <Card.Text>
                  <div className="menu-title d-flex justify-content-between">
                    <span>$ 10</span>
                    <img src="images/trolley.png" alt="title" />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PopularDishes;
