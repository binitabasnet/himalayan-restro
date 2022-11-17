import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import WebsiteLayout from "../Components/Layouts/WebsiteLayout";
import Cart from "../Pages/CartPage/Cart";
import MenuPage from "../Pages/Menus/MenuPage";
import BookTable from "../Pages/TableBooking.jsx/BookTable";
import CheckoutPage from "../Pages/Checkout/CheckoutPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <WebsiteLayout>
            <Home />
          </WebsiteLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <WebsiteLayout>
            <Cart />
          </WebsiteLayout>
        }
      />
      <Route
        path="/menu"
        element={
          <WebsiteLayout>
            <MenuPage />
          </WebsiteLayout>
        }
      />
      <Route
        path="/reserve"
        element={
          <WebsiteLayout>
            <BookTable />
          </WebsiteLayout>
        }
      />
      <Route
        path="/checkout"
        element={
          <WebsiteLayout>
            <CheckoutPage />
          </WebsiteLayout>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
