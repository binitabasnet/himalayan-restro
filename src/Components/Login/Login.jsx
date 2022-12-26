import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./login.scss";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const data = [
    {
      username: "user1@gmail.com",
      password: "pass1",
    },
    {
      username: "user2@gmail.com",
      password: "pass2",
    },
  ];

  const errors = {
    email: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { email, pass } = document.forms[0];

    // Find user login info
    const userData = data.find((user) => user.username === email.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  // error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error text-danger">{errorMessages.message}</div>
    );

  return (
    <>
      <div className="main">
        {isSubmitted ? (
          <div className="d-flex justify-content-center align-items-center ">
            <span className="text-success">User is succesfully logged in </span>
            {/* <Dashboard /> */}
          </div>
        ) : (
          <>
            <div className="header text-center">
              {/* <img src="/images/logo.jpg" className="logo mb-1" alt="..." /> */}
              <h2>Login</h2>
              <span>Login and Get Going</span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="login row mt-4 ">
                <form onSubmit={handleSubmit}>
                  <div className="col-12 mb-3 ">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="form-control"
                      required
                    />
                    {renderErrorMessage("email")}
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="password"
                      name="pass"
                      id="password"
                      placeholder="Password"
                      className="form-control"
                      required
                    />
                    {renderErrorMessage("pass")}
                  </div>

                  <div className="label  mb-3">
                    <Row>
                      <Col>
                        <Form.Check inline label="Remember me" />
                      </Col>
                      <Col className="float-right">
                        <Link
                          to="/forgotpassword"
                          className="text-decoration-none text-success "
                        >
                          <strong>Forgot Password?</strong>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                  <Button variant="success" type="submit">
                    Login
                  </Button>
                </form>
              </div>
            </div>
            <div className="member-signup d-flex justify-content-center">
              <span className=" text-white m-1">Not a member?</span>
              <Link
                to="/signup"
                className="text-decoration-none text-white m-1"
              >
                Create an account
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
