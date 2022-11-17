import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./services.scss";

const Services = () => {
  return (
    <div className="services-section">
      <div className="overlay">
        <Container>
          <div className="text-center">
            <h1>Our Services</h1>
            <p>
              How We <span>Work</span>
            </p>
          </div>

          <Row className="services mt-5">
            <Col md={3} className="text-center">
              <img src="images/cake.png" alt="cake-img" />
              <h4>Birthday Party</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus dolores nulla esse, autem asperiores maxime mollitia
                perspiciatis culpa tempora
              </p>
              <img src="images/horizontal-straight.png" alt="line" />
            </Col>
            <Col md={3} className="text-center">
              <img src="images/buffet.png" alt="events-img" />
              <h4>Special Events</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus dolores nulla esse, autem asperiores maxime mollitia
                perspiciatis culpa tempora
              </p>
              <img src="images/horizontal-straight.png" alt="line" />
            </Col>
            <Col md={3} className="text-center">
              <img src="images/catering.png" alt="dining-img" />
              <h4>Private Dining</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus dolores nulla esse, autem asperiores maxime mollitia
                perspiciatis culpa tempora
              </p>
              <img src="images/horizontal-straight.png" alt="line" />
            </Col>
            <Col md={3} className="text-center">
              <img src="images/charity.png" alt="charity-img" />
              <h4>Charity Events</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus dolores nulla esse, autem asperiores maxime mollitia
                perspiciatis culpa tempora
              </p>
              <img src="images/horizontal-straight.png" alt="line" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
