import React from "react";
import Categories from "../../Components/Cards/Categories/Categories";
import Banner from "../../Components/Cards/HomeBanner/Banner";
import PopularDishes from "../../Components/Cards/Popular/PopularDishes";
import Testimony from "../../Components/Cards/Testimony/Testimony";
import Work from "../../Components/Cards/Work/Work";
import Reservation from "../../Components/Reserve/Reservation";

const Home = () => {
  return (
    <>
      <Banner />
      <PopularDishes />
      <Categories />
      <Reservation />
      <Work />
      <Testimony />
    </>
  );
};

export default Home;
