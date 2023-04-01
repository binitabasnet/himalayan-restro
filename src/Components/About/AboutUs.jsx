import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Services from "../Services/Services";
import "./about.scss";

const AboutUs = () => {
  return (
    <>
      <Container className="aboutus p-4">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={6}>
            <img src="images/owner.jpeg" alt="about-us" />
          </Col>
          <Col md={6}>
            <h3>About Us</h3>
            <p>
              Himalayan Nepalese Restaurant and Cafe introduces the unique
              tastes of the Himalayas right in the middle of Victoria Park,
              Inglewood and Mosman Park. Our restaurants provide a friendly,
              tranquil environment where you will hear the soothing sounds of
              the Himalayas. Sit back and enjoy the freshly created taste
              sensations that only Himalayan Nepalese Restaurant and Cafe can
              offer. Nepalese cuisine will invigorate your senses as it combines
              great culinary traditions of the neighbouring countries of China
              and India. The Nepalese are descendants of major migrations from
              India, Tibet, North Burma and Yunnan via Assam. Nepalese dishes
              thus exhibits this great diversity and cultural mix.
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center mt-5">
          <Col md={6} className="order-5 order-sm-1">
            <h3>Catering For Events</h3>
            <p>
              Himalayan Nepalese Restaurant and Cafe specialises in making every
              event a success through our mouth watering dishes and outstanding
              service. We Cater for Birthday, Corporate, Wedding and other
              functions. Over the years, we have successfully catered many
              weddings and receptions of over 200 guests both at our restaurants
              and at customer's choosen venue. You can be assured to contact us
              to arrange your next event.
            </p>
          </Col>
          <Col md={6} className="order-1 order-sm-5">
            <img src="images/himal.jpg" alt="about-us" />
          </Col>
        </Row>
      </Container>
      <Services />
      <Container className="aboutus p-4">
        <Row className="d-flex justify-content-center align-items-center mt-5">
          <Col md={6}>
            <img src="images/himal.jpg" alt="about-us" />
          </Col>
          <Col md={6}>
            <h3>Opening Hours</h3>
            <p>
              We are open from Monday through Sunday at all of our locations.
              Take a look at the opening hours.
            </p>
            <Row className="mt-5">
              <Col md={4} className="text-center">
                <Card className="p-2">
                  <ul className="list-unstyled">
                    <li>
                      <h5>Inglewood</h5>
                    </li>

                    <li>Mon-Sun:5:00pm-10:00pm</li>

                    <li>Wed-Sun:11:00am-3:00pm</li>
                  </ul>
                </Card>
              </Col>
              <Col md={4} className="text-center">
                <Card className="p-2">
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <h5>Victoria Park</h5>
                    </li>

                    <li>Mon-Sun:5:00pm-10:00pm</li>

                    <li>Wed-Sun:11:00am-3:00pm</li>
                  </ul>
                </Card>
              </Col>
              <Col md={4} className="text-center">
                <Card className="p-2">
                  <ul className="list-unstyled">
                    <li>
                      <h5>Mosman Park</h5>
                    </li>
                    <li>Mon-Sun:5:00pm-10:00pm</li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
