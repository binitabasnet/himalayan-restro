import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./booktable.scss";

const BookTable = () => {
  const [message, setMessage] = useState();
  const [tables, setTables] = useState();

  useEffect(() => {
    const getMenus = async () => {
      const apiMenus = await axios.get("tables");
      setTables(apiMenus.data);
      //  console.log(tables);
    };
    getMenus();
  }, [tables]);

  const navigate = useNavigate();

  const [input, setInput] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    date: "",
    guestno: "",
    tableno: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    // validateInput(e);
  };

  const getInitialState = () => {
    const value = "Orange";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text-plain, */*",
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user");
    toast.success("Order-confirmed");
    // const table=value
    axios
      .post(
        "/reservation",
        {
          first_name: input.first,
          last_name: input.last,
          email: input.email,
          res_date: input.date,
          guest_number: input.guestno,
          tel_number: input.phone,
          table_id: value,
        },
        config
      )
      .then(function (response) {
        // navigate("/");
        window.location.reload();
        toast.success("reserved");
        setMessage(response.data);
        console.log(response.data);
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
    <Container className="book-table mt-5 mb-5">
      <h3>Reservation Details</h3>
      <Row>
        <Col md={8}>
          <Card className="p-3 mb-3">
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
                    type="number"
                    onChange={onInputChange}
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={input.phone}
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
                  <label for="guestno">No of Guests</label>
                  <input
                    type="number"
                    className="form-control"
                    id="guestno"
                    name="guestno"
                    value={input.guestno}
                    onChange={onInputChange}
                    placeholder="No of guests"
                  />
                </div>

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
                  <label>Table No</label>
                  <br />
                  <Form.Select value={value} onChange={handleChange}>
                    {tables && tables.length > 0 ? (
                      tables.map((table, i) => (
                        <option value={table.name} key={i}>
                          {table.name}
                        </option>
                      ))
                    ) : (
                      <p>Tables Unavailable</p>
                    )}
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
            {/* <Card.Title className="date-title">
              <h4>Sep 2022</h4>
              <strong>Next</strong>
            </Card.Title>
            <Card.Body>
              <div className="dates">
                <h5>Sun</h5>
                <span>7</span>
              </div>
              <div className="dates">
                <h5>Mon</h5>
                <span>8</span>
              </div>
              <div className="dates">
                <h5>Tue</h5>
                <span>9</span>
              </div>
              <div className="dates">
                <h5>Wed</h5>
                <span>10</span>
              </div>
              <div className="dates">
                <h5>Thurs</h5>
                <span>11</span>
              </div>
              <div className="dates">
                <h5>Fri</h5>
                <span>12</span>
              </div>
              <div className="dates">
                <h5>Sat</h5>
                <span>13</span>
              </div>
            </Card.Body>
          </Card>

          <Card className="p-3 mb-5">
            <Row className="time-select">
              <h4>Time</h4>
              <Col md={5}>
                <div className="time">
                  <p>07</p>
                  <span>:</span>
                  <p>15</p>
                  <div className="am-pm">
                    AM
                    <IoIosArrowDown />
                  </div>
                </div>
              </Col>
              <Col md={2}>
                <h4>TO</h4>
              </Col>
              <Col md={5}>
                <div className="time">
                  <p>07</p>
                  <span>:</span>
                  <p>15</p>
                  <div className="am-pm">
                    PM
                    <IoIosArrowDown />
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
          <h4>Contact Informations</h4>
          <Card className="p-3 mb-3">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Enter Full Name"
                  required
                />
                <hr />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPhone">
                <Form.Control
                  type="phone"
                  placeholder="Enter Phone Number"
                  required
                />
                <hr />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Control type="text" placeholder="City" required />
                    <hr />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-4" controlId="formBasicNumber">
                    <Form.Control
                      type="number"
                      placeholder="No of members"
                      required
                    />
                    <hr />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card>

          <Button className="d-block w-100 mt-2">Confirm Booking</Button>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <h3>Book A Table</h3>
            <div className="table-card">
              <div className="day">
                <span>1</span>
              </div>
              <div className="day">
                <span>2</span>
              </div>
              <div className="day">
                <span>3</span>
              </div>
              <div className="day">
                <span>4</span>
              </div>
              <div className="day">
                <span>5</span>
              </div>
              <div className="day">
                <span>6</span>
              </div>
              <div className="day">
                <span>7</span>
              </div>
              <div className="day">
                <span>8</span>
              </div>
            </div>
            <div className="text-center">
              <Button className="d-block w-100 mt-3">Done</Button>
            </div> */}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookTable;
