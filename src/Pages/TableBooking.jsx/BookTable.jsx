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
    const getTables = async () => {
      const apiTables = await axios.get("tables");
      setTables(apiTables.data);
      // console.log(tables);
    };
    getTables();
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
    // console.log("user");

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
        navigate("/");
        window.alert("Reserved");
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
                    required
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
                    required
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
                    value={input.phone}
                    required
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
                    required
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
                    required
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
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Table No</label>
                  <br />
                  <Form.Select value={value} onChange={handleChange}>
                    {tables && tables.length > 0 ? (
                      tables.map((table) => (
                        <option value={table.id} key={table.id}>
                          {table.name}({table.guest_number} Guests)
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
                    <span>Confirm Booking</span>
                  </Button>
                </div>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookTable;
