import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./categories.scss";

const Categories = () => {
  return (
    <Container className="categories">
      <Row>
        <div className="text-center mb-5">
          <p>Top Categories</p>
          <h1>
            Explore Our Best <span>Menu</span>{" "}
          </h1>
        </div>
        <div className="menu-section">
          <ul className="list-unstyled">
            <li>MoMo</li>
            <li>Chicken</li>
            <li>Salad</li>
            <li>Burger</li>
          </ul>
        </div>

        <Col md={3}>
          <Card>
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
          <Card>
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
          <Card>
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
          <Card>
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
  );
};

export default Categories;
