import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Categories from "../../Components/Cards/Categories/Categories";
import Banner from "../../Components/Cards/HomeBanner/Banner";
import PopularDishes from "../../Components/Cards/Popular/PopularDishes";

import Work from "../../Components/Cards/Work/Work";
import Reservation from "../../Components/Reserve/Reservation";
import Review from "../../Components/Reviews/Review";
import "./home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Offers from "../../Components/Offers/Offers";
import axios from "axios";
import customerreview from "../../Components/data/review.json";
import { Link } from "react-router-dom";

const Home = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const getMenus = async () => {
      const apiMenus = await axios.get("menus");
      setMenus(apiMenus.data);
      console.log(menus);
    };
    getMenus();
  }, []);

  const review = () => {
    return customerreview.testimonials;
  };

  const [test, setTest] = useState([]);

  useEffect(() => {
    const allTest = review();
    setTest(allTest);
  }, []);

  SwiperCore.use([Autoplay, Navigation]);

  const [show, setShow] = useState(true);
  return (
    <div className="landingpage">
      <Banner />
      <Container className="populardishes mt-5">
        <Row>
          <div className="text-center mb-5">
            <p>Featured Dishes</p>
            <h1>
              Our Best Selling <span>Dishes</span>{" "}
            </h1>
          </div>
          {/* <PopularDishes /> */}
          {menus.map((fetchproduct) => (
            <PopularDishes
              key={fetchproduct.id}
              id={fetchproduct.id}
              name={fetchproduct.name}
              price={fetchproduct.price}
              image={"http://localhost:8000/storage/" + fetchproduct.image}
              description={fetchproduct.description}
            />
          ))}
        </Row>
      </Container>
      <Offers />
      <Categories />
      <Reservation />
      <Work />
      <Container className="testimony-card mb-5">
        <div className="header text-center mb-5">
          <p>Testimonials</p>
          <h1>
            What People Say <span>About</span>{" "}
          </h1>
        </div>
        <Row className="testimony-content">
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              640: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              // when window width is >= 992px
              992: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              // when window width is >= 1200px
              1200: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              1300: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
            }}
            navigation
            modules={[Pagination, Navigation]}
            // navigation={{
            //   prevEl: navigationPrevRef.current,
            //   nextEl: navigationNextRef.current,
            // }}
            showsPagination={false}
            spaceBetween={32}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {test.map((tests) => {
              return (
                <SwiperSlide className="d-flex justify-content-center align-items-center">
                  <Review
                    key={tests.id}
                    name={tests.name}
                    description={tests.description}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </Container>
      <Modal show={show} onHide={() => setShow(false)} size="md">
        <Modal.Header closeButton>
          <Modal.Title>
            <h4> Choose Your Order Type and location</h4>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className="m-3">
            <Col>
              <Form.Select>
                <option>Select Branch</option>
                <option value="1">Mosman Park</option>
                <option value="2">Inglewood</option>
                <option value="3">Victoria Park</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select>
                <option>Order Type</option>
                <option value="1">Delivery</option>
                <option value="2">Pick-Up</option>
                <option value="3">Dine in</option>
              </Form.Select>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" className="m-1 p-1">
            <Link to="/menu">
              <span className="p-3 text-white">Order Now</span>
            </Link>
          </Button>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnHover
        hideProgressBar
      />
    </div>
  );
};

export default Home;
