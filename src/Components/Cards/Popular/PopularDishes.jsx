import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./populardishes.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const myStorage = window.localStorage;

const PopularDishes = ({ id, title, image, price }) => {
  const dispatch = useDispatch();
  const [menus, setMenus] = useState([]);
  const [orderId, setOrderId] = useState();
  const [cart, setCart] = useState([]);

  //  const handleCart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  useEffect(() => {
    const getMenus = async () => {
      const apiMenus = await axios.get("menus");
      setMenus(apiMenus.data);
      console.log(menus);
    };
    getMenus();
  }, [menus]);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text-plain, */*",
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const handleAddToCart = (product) => {
    // const order_id = Number(myStorage.getItem("orderId"));

    // if (order_id) {
    //   console.log(order_id);
    //   setOrderId(order_id);
    // } else {
    //   axios
    //     .get("orders/get-order-id")
    //     .then(function (response) {
    //       setOrderId(response.data);
    //       JSON.parse(myStorage.setItem("orderId", orderId));
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // }

    // const orders = {
    //   order_id: order_id,
    //   menu_id: product.id,
    //   quantity: getTotalQuantity() || 0,
    // };

    // axios
    //   .post("cart/order-item", orders, config)
    //   .then(function (response) {
    //     setCart(response.data.data);
    //     console.log("cart", cart);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    dispatch(addToCart(product));
    toast.success("item added to cart");
  };

  return (
    <>
      {/* {menus.map((item) => ( */}
      <Col md={3} key={id}>
        <Card className="mb-3">
          <Card.Title>
            <Card.Img variant="top" src={image} />
          </Card.Title>
          <Card.Body>
            <Card.Title>
              <div className="menu-title d-flex justify-content-between">
                <span>{title}</span>
                <img src="images/heart.png" alt="title" />
              </div>
            </Card.Title>
            <Card.Text>
              <div className="menu-title d-flex justify-content-between">
                <span>$ {price}</span>
                <img
                  src="images/trolley.png"
                  alt="cart-img"
                  onClick={() =>
                    dispatch(
                      handleAddToCart({
                        id,
                        title,
                        image,
                        price,
                      })
                    )
                  }
                />
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      {/* ))} */}
    </>
  );
};

export default PopularDishes;
