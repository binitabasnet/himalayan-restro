import React from "react";
import { ToastContainer } from "react-toastify";
import ShoppingCart from "../../Components/Cart/ShoppingCart";

const Cart = () => {
  return (
    <>
      <ShoppingCart />
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

export default Cart;
