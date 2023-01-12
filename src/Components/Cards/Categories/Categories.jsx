import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../../Redux/cartSlice";
import PopularDishes from "../Popular/PopularDishes";
import "./categories.scss";

const myStorage = window.localStorage;
const Categories = ({ id, name, image, price }) => {
  const dispatch = useDispatch();
  // const [menus, setMenus] = useState([]);
  const [orderId, setOrderId] = useState();
  const [categories, setCategories] = useState([]);

  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text-plain, */*",
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const handleAddToCart = (product) => {
    const order_id = myStorage.getItem("orderId");

    if (!order_id) {
      axios
        .get("orders/get-order-id")
        .then(function (response) {
          setOrderId(response.data);
          myStorage.setItem("orderId", response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      console.log(order_id);
      setOrderId(order_id);
    }

    const orders = {
      order_id: order_id,
      menu_id: product.id,
      quantity: getTotalQuantity() || 0,
    };

    axios
      .post("cart/order-item", orders, config)
      .then(function (response) {
        cart(response.data.data);
        // console.log("cart", cart);
      })

      .catch(function (error) {
        console.error(error);
      });
    dispatch(addToCart(product));
    toast.success("item added to cart");
  };

  useEffect(() => {
    const getCategories = async () => {
      const apiCategories = await axios.get("category-menu");
      setCategories(apiCategories.data);
      console.log(categories);
    };
    getCategories();
  }, [categories]);

  return (
    <Container className="categories">
      <Row>
        <div className="text-center mb-5">
          <p>Top Categories</p>
          <h1>
            Explore Our Best <span>Menu</span>{" "}
          </h1>
        </div>
        <div className="menu-section">
          <ul className="list-unstyled">
            {categories.map((catmenu) => (
              <li key={catmenu.category_id}>{catmenu.category_name}</li>
            ))}
          </ul>
        </div>

        {categories.map((catmenu) => {
          return catmenu.menu_items.map((menus) => (
            <PopularDishes
              id={menus.id}
              name={menus.name}
              image={menus.image}
              price={menus.price}
            />
            // <Col md={3}>
            //   <Card className="mb-3">
            //     <Card.Title>
            //       <Card.Img variant="top" src={menus.image} />
            //     </Card.Title>
            //     <Card.Body>
            //       <Card.Title>
            //         <div className="menu-title d-flex justify-content-between">
            //           <span>{menus.name}</span>
            //           <img src="images/heart.png" alt="title" />
            //         </div>
            //       </Card.Title>
            //       <Card.Text>
            //         <div className="menu-title d-flex justify-content-between">
            //           <span>$ {menus.price}</span>
            //           <img
            //             src="images/trolley.png"
            //             alt="title"
            //             onClick={() =>
            //               dispatch(
            //                 handleAddToCart({
            //                   id,
            //                   name,
            //                   image,
            //                   price,
            //                 })
            //               )
            //             }
            //           />
            //         </div>
            //       </Card.Text>
            //     </Card.Body>
            //   </Card>
            // </Col>
          ));
        })}
      </Row>
    </Container>
  );
};

export default Categories;
