import React from "react";
import { ToastContainer } from "react-toastify";

import Categories from "../../Components/Cards/Categories/Categories";

const MenuPage = () => {
  return (
    <>
      <Categories />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnHover
        hideProgressBar
      />
    </>
  );
};

export default MenuPage;
