import React from "react";
import { Container } from "react-bootstrap";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const images = [
    {
      original:
        "https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?size=626&ext=jpg",
      thumbnail:
        "https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?size=626&ext=jpg",
    },
    {
      original:
        "https://img.freepik.com/free-photo/restaurant-hall-with-lots-table_140725-6309.jpg?size=626&ext=jpg",
      thumbnail:
        "https://img.freepik.com/free-photo/restaurant-hall-with-lots-table_140725-6309.jpg?size=626&ext=jpg",
    },
    {
      original:
        "https://img.freepik.com/free-photo/tables-chairs-arranged-empty-coffee-shop_107420-96463.jpg?w=740&t=st=1666174194~exp=1666174794~hmac=5915b52d2410de7cdf00f4fba6271343c60545557e45c1b8e5fa0b6cf09d39ae",
      thumbnail:
        "https://img.freepik.com/free-photo/tables-chairs-arranged-empty-coffee-shop_107420-96463.jpg?w=740&t=st=1666174194~exp=1666174794~hmac=5915b52d2410de7cdf00f4fba6271343c60545557e45c1b8e5fa0b6cf09d39ae",
    },
  ];
  return (
    <Container fluid className="mb-5">
      <div className="mt-5 mb-5">
        <h1 className="text-center mt-3 mb-3">Take a look at our Gallery</h1>
      </div>
      <ReactImageGallery items={images} />
    </Container>
  );
};

export default Gallery;
