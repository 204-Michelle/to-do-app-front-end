import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { Typography, TextField, Button } from "@mui/material";

import { publicConstants } from "../PublicConstants";
import { signUp } from "../../store/actions/authActions";
import "../../styles/Forms.css";

const { theme } = publicConstants;

const SignUp = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  if (auth._id) return <Navigate to="/" />;
  return (
    <>
      <form
        className="form-style"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Join us</Typography>
        <TextField
          className="spacing"
          id="enter-name"
          label="Enter name"
          variant="outlined"
          fullWidth
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <TextField
          className="spacing"
          id="enter-email"
          label="Enter e-mail"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          className="spacing"
          id="enter-password"
          type="password"
          label="Enter password"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          className="spacing"
          theme={theme}
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default SignUp;
