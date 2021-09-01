import React from "react";
import { TextField, Button, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const validateUser = (empData) => {
  const errors = {};

  if (!empData.firstName) {
    errors.firstName = "Please enter the firstName";
  }
  if (!empData.lastName) {
    errors.lastName = "Please enter the lastName";
  }

  if (!empData.username) {
    errors.username = "Please enter the Username";
  }

  if (!empData.email) {
    errors.email = "Please Enter Email ID";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)) {
    errors.email = "Invalid email address";
  }

  if (!empData.password) {
    errors.password = "PLease enter the password";
  }
  if (!empData.confirmPassword) {
    errors.confirmPassword = "PLease enter the password";
  }

  return errors;
};

export const Signup = () => {
  const formik = useFormik({
    initialValues: {
      mail: "",
      password: "",
      firstName: "",
      lastName: "",
      username: "",
      confirmPassword: "",
    },
    validate: validateUser,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div>
      <div className="icon">
        <div></div>
        <div className="">Sign up</div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-6">
            <TextField
              id="firstname"
              type="text"
              varient="outlined"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              label="enter the first name"
              fullWidth
            />
            {formik.errors.firstName ? (
              <span style={{ color: "red" }}>{formik.errors.firstName}</span>
            ) : null}
          </div>
          <div className="col-6">
            <TextField
              id="lastname"
              type="text"
              varient="outlined"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              label="enter the last name"
              fullWidth
            />
            {formik.errors.lastName ? (
              <span style={{ color: "red" }}>{formik.errors.lastName}</span>
            ) : null}
          </div>
          <TextField
            id="username"
            type="text"
            varient="outlined"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            label="enter the username"
            fullWidth
          />
          {formik.errors.username ? (
            <span style={{ color: "red" }}>{formik.errors.username}</span>
          ) : null}
        </div>
        <div className="row">
          <TextField
            id="email"
            type="text"
            varient="outlined"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            label="enter the email"
            fullWidth
          />
          {formik.errors.email ? (
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          ) : null}
          <TextField
            id="password"
            type="password"
            varient="outlined"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            label="enter the password"
            fullWidth
          />
          {formik.errors.password ? (
            <span style={{ color: "red" }}>{formik.errors.password}</span>
          ) : null}
          <TextField
            id="password"
            type="password"
            varient="outlined"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            label="confirm password"
            fullWidth
          />
          {formik.errors.confirmPassword ? (
            <span style={{ color: "red" }}>
              {formik.errors.confirmPassword}
            </span>
          ) : null}
          <Button type="submit" varient="contained" color="primary">
            Create Account
          </Button>
        </div>
      </form>
      <Divider varient="middle" />
      <div className="text-center">
        <Link to="/login">Already have an account</Link>
      </div>
    </div>
  );
};
