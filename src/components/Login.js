import React from "react";
import { TextField, Button, Divider } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { useFormik } from "formik";

const validateUser = (empData) => {
  const errors = {};
  if (!empData.email) {
    errors.email = "Please Enter Email ID";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)) {
    errors.email = "Invalid email address";
  }

  if (!empData.password) {
    errors.password = "PLease enter the password";
  }
  if (!empData.username) {
    errors.username = "Please enter the Username";
  }

  return errors;
};

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      mail: "",
      password: "",
      username: "",
    },
    validate: validateUser,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      //   <Link to="/listofusers">hello</Link>;
    },
  });
  return (
    <div>
      <div className="icon">
        <div className="">Login </div>
      </div>
      <div className="row"></div>
      <form onSubmit={formik.handleSubmit}>
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
        </div>

        <span>or</span>

        <div className="row">
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
          <TextField
            id="password"
            type="text"
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
          <Button type="submit" varient="contained" color="primary">
            Login Account <Redirect to="/listofusers" />
          </Button>
        </div>
      </form>
      <Divider varient="middle" />
      <div className="text-center">
        <Link to="/">Create account</Link>
      </div>
    </div>
  );
};
