import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./total.scss";
import { removeAll } from "../../Redux/cartSlice";

const myStorage = window.localStorage;

function Total({ id, image, title, price, quantity = 0 }) {
  const cart = useSelector((state) => state.cart);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  const [input, setInput] = useState({
    first: "",
    last: "",
    email: "",
    address: "",
    date: "",
    city: "",
    phone: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    // validateInput(e);
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text-plain, */*",
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "*",
    },
  };
  // const dispatch = useDispatch();

  // const handleRemoveFromCart = (product) => {
  //   toast.success("item removed");
  //   dispatch(removeItem(product));
  // };

  useEffect(() => {
    const order = Number(myStorage.getItem("orderId"));
    axios
      .get("cart/order-item/" + order)
      .then(function (response) {
        cart(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  const dispatch = useDispatch();

  const handleRemoveAll = (product) => {
    toast.success("all items removed");
    dispatch(removeAll(product));
  };

  const foods = cart.map((item) => item.id);
  const handleSubmit = (e) => {
    e.preventDefault();

    const order_id = myStorage.getItem("orderId");
    axios
      .post(
        "orders/confirm-order",
        {
          id: order_id,
          first_name: input.first,
          last_name: input.last,
          email: input.email,
          address: input.address,
          order_date: input.date,
          city: input.city,
          tel_number: input.phone,
          cost: getTotal().totalPrice + getTotal().totalQuantity * 3,
        },
        config
      )
      .then(function (response) {
        setMessage(response.data);
        navigate("/");
        window.alert(response.data);
        myStorage.removeItem("orderId");
        dispatchEvent(handleRemoveAll(foods));
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const msgDiv = message ? (
    <div className="msg">
      <span className="error-text">{message}</span>
    </div>
  ) : (
    ""
  );

  return (
    <>
      <Card className="p-3">
        <div className="total">
          <h3>ORDER SUMMARY</h3>
          <div>
            <p className="total__p">
              Sub Total ({getTotal().totalQuantity} items) :{" "}
              <strong>${getTotal().totalPrice}</strong>
            </p>
            <p className="total__p">
              Shipping Fee : <strong>${getTotal().totalQuantity * 3}</strong>
            </p>
            <Row>
              <Col md={8}>
                <Form>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="offer"
                    placeholder="Enter Voucher Code"
                    name="offer"
                    value=""
                  />
                </Form>
              </Col>
              <Col md={4}>
                {" "}
                <Button className="mb-3">Apply</Button>
              </Col>
            </Row>

            <p className="total__p">
              Total :{" "}
              <strong>
                ${getTotal().totalPrice + getTotal().totalQuantity * 3}
              </strong>
            </p>
          </div>
          <Button onClick={handleShow}>
            Checkout({getTotal().totalQuantity})
          </Button>
        </div>
      </Card>
      <Modal show={showModal} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Add Your Details</h4>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="first"
                  placeholder="Full Name"
                  name="first"
                  value={input.first}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="name">Last Name</label>
                <input
                  type="text"
                  onChange={onInputChange}
                  className="form-control"
                  id="last"
                  name="last"
                  placeholder="Last Name"
                  value={input.last}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label for="number">Phone Number</label>
                <input
                  type="phone"
                  onChange={onInputChange}
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  value={input.contact}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={onInputChange}
                  placeholder="Email"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="City">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={input.city}
                  onChange={onInputChange}
                  placeholder="City"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  onChange={onInputChange}
                  value={input.address}
                  placeholder="Address"
                />
              </div>
              {/* <div className="col-md-6 mb-3">
              <label for="Status">Status</label>
              <input
                type="text"
                className="form-control"
                id="status"
                name="action"
                value={input.action}
                onChange={onInputChange}
                placeholder="Status"
              />
            </div> */}
              <div className="col-md-6 mb-3">
                <label for="date">Date</label>
                <input
                  type="datetime-local"
                  id="date"
                  name="date"
                  placeholder="Date"
                  onChange={onInputChange}
                  value={input.date}
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="date">Order Type</label>
                <Form.Select>
                  <option>select options</option>
                  <option value="1">Delivery</option>
                  <option value="2">Dine-in</option>
                  <option value="3">Pickup</option>
                </Form.Select>
              </div>
              {msgDiv}

              <div className="">
                <Button
                  className="m-auto d-block "
                  variant="primary"
                  type="submit"
                >
                  <span> Confirm Order</span>
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnHover
        hideProgressBar
      />
    </>
  );
}

export default Total;
