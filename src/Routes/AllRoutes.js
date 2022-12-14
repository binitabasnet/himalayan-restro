import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import WebsiteLayout from "../Components/Layouts/WebsiteLayout";
import Cart from "../Pages/CartPage/Cart";
import MenuPage from "../Pages/Menus/MenuPage";
import BookTable from "../Pages/TableBooking.jsx/BookTable";
import CheckoutPage from "../Pages/Checkout/CheckoutPage";
import Gallery from "../Pages/Gallery/Gallery";
import ContactUs from "../Components/Contact/ContactUs";
import AboutUs from "../Components/About/AboutUs";
import ShoppingCart from "../Components/Cart/ShoppingCart";
import CartItem from "../Components/Cart/CartItem";

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
            <ShoppingCart />
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
      <Route
        path="/gallery"
        element={
          <WebsiteLayout>
            <Gallery />
          </WebsiteLayout>
        }
      />
      <Route
        path="/contactus"
        element={
          <WebsiteLayout>
            <ContactUs />
          </WebsiteLayout>
        }
      />
      <Route
        path="/aboutus"
        element={
          <WebsiteLayout>
            <AboutUs />
          </WebsiteLayout>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
