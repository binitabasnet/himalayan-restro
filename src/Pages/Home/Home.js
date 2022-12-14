import React from "react";
import { Container, Row } from "react-bootstrap";
import Categories from "../../Components/Cards/Categories/Categories";
import Banner from "../../Components/Cards/HomeBanner/Banner";
import PopularDishes from "../../Components/Cards/Popular/PopularDishes";

import Work from "../../Components/Cards/Work/Work";
import Reservation from "../../Components/Reserve/Reservation";
import Review from "../../Components/Reviews/Review";
import "./home.scss";

const Home = () => {
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
      <Categories />
      <Reservation />
      <Work />
      <Review />
    </div>
  );
};

export default Home;
