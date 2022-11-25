import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./review.scss";
import customerreview from "../../Components/data/review.json";

const Review = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

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
      <Container className="testimony-card mb-5">
        <div className="header text-center mb-5">
          <p>Testimonials</p>
          <h1>
            What People Say <span>About</span>{" "}
          </h1>
        </div>
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
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
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
          {test.map((tests, k) => {
            return (
              <SwiperSlide className="flex items-center justify-center">
                <Row className="testimony-content">
                  <Col md={4} key={k}>
                    <Card className="mb-3">
                      <Row className="p-3">
                        <Col md={5} className="m-auto">
                          <div className="testimony-img">
                            <img
                              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                              alt="test"
                            />
                          </div>
                        </Col>
                        <Col md={7}>
                          <h4 className="mb-0">{tests.name}</h4>
                          <span className="text-muted">Customer</span>
                          <p className="mt-3 txt-muted">{tests.description}</p>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};

export default Review;
