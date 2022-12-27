import React from "react";
import { Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Categories from "../../Components/Cards/Categories/Categories";
import Banner from "../../Components/Cards/HomeBanner/Banner";
import PopularDishes from "../../Components/Cards/Popular/PopularDishes";

import Work from "../../Components/Cards/Work/Work";
import Reservation from "../../Components/Reserve/Reservation";
import Review from "../../Components/Reviews/Review";
import "./home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Offers from "../../Components/Offers/Offers";

const Home = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const food = {
    products: [
      {
        id: 1,
        image:
          "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000",
        price: 98,
        title: "Momo",
      },
      {
        id: 2,
        image: "images/naan.png",
        price: 100,
        title: "Biryani",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 100,
        title: "Naan",
      },
      {
        id: 4,
        image: "images/thali.png",
        price: 200,
        title: "Desserts",
      },
    ],
  };
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
          {food.products?.map((fetchproduct) => (
            <PopularDishes
              key={fetchproduct.id}
              id={fetchproduct.id}
              title={fetchproduct.title}
              price={fetchproduct.price}
              image={fetchproduct.image}
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
            <SwiperSlide>
              <Review />
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
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
