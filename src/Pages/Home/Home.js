import React from "react";
import Categories from "../../Components/Cards/Categories/Categories";
import Banner from "../../Components/Cards/HomeBanner/Banner";
import PopularDishes from "../../Components/Cards/Popular/PopularDishes";

import Work from "../../Components/Cards/Work/Work";
import Reservation from "../../Components/Reserve/Reservation";
import Review from "../../Components/Reviews/Review";
import "./home.scss";

const Home = () => {
  return (
    <div className="landingpage">
      <Banner />
      <PopularDishes />
      <Categories />
      <Reservation />
      <Work />
      <Review />
    </div>
  );
};

export default Home;
