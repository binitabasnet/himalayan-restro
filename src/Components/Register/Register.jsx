import React, { useState } from "react";
import Login from "../Login/Login";

import { Button, Form } from "react-bootstrap";
import "./register.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { IoLogoWindows } from "react-icons/io";

const myStorage = window.localStorage;
const Register = () => {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // confirm password
  const handleCpassword = (e) => {
    setCpassword(e.target.value);
    setSubmitted(false);
  };
  // Handling the form submission
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text-plain, */*",
      "X-Requested-With": "XMLHttpRequest",
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === cpassword) {
      axios
        .post("/register", { name, email, password, cpassword }, config)
        .then(function (response) {
          // myStorage.setItem("token", `Bearer ${response.data.token}`);
          // myStorage.setItem("user", response.data.user.name);
          myStorage.setItem("user", response.data.name);
          toast.success("Your Profile has been registered");
          window.alert("profile registered");
        })
        .catch(function (error) {
          console.error(error);
        });
      setSubmitted(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <span className="text-success">
          User {name} successfully registered!!
        </span>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <span className="text-danger">Please enter all the fields</span>
      </div>
    );
  };

  console.log({ name, email, password, cpassword });
  return (
    <>
      <div className="register container-fluid">
        <div className="main ">
          {submitted ? (
            <div className="messages">
              {errorMessage()}
              {successMessage()}
              <Login />
            </div>
          ) : (
            <>
              <div className="header text-center">
                <h2>Sign up</h2>
                <span>Register and Get Going</span>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <div className="row mt-4  mr-20 ">
                  <Form onSubmit={handleSubmit}>
                    <div className="col-12 mb-3 ">
                      <input
                        type="text"
                        name="text"
                        id="text"
                        placeholder="Enter your name"
                        className="form-control"
                        onChange={handleName}
                        value={name}
                        autoComplete="username"
                        required
                      />
                    </div>
                    <div className="col-12 mb-3 ">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        className="form-control"
                        onChange={handleEmail}
                        value={email}
                        autoComplete="username email"
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <input
                        type="password"
                        name="pass"
                        id="password"
                        placeholder="Password"
                        className="form-control"
                        onChange={handlePassword}
                        value={password}
                        autoComplete="new-password"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <input
                        type="password"
                        name="cpass"
                        id="cpassword"
                        placeholder="Confirm Password"
                        className="form-control"
                        onChange={handleCpassword}
                        value={cpassword}
                        autoComplete="true"
                      />
                    </div>

                    <div className="label  mb-3">
                      <Form.Check
                        inline
                        label="I agree with Terms and Policy"
                      />
                    </div>
                    <div className="member-signup">
                      <Button variant="primary" type="submit">
                        Register
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
