import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { Typography, TextField, Button } from "@mui/material";

import { publicConstants } from "../PublicConstants";
import { signIn } from "../../store/actions/authActions";
import "../../styles/Forms.css";

const { theme } = publicConstants;

const SignIn = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds));
    setCreds({
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
        <Typography variant="h5">Welcome</Typography>
        <TextField
          className="spacing"
          id="enter-email"
          label="Enter e-mail"
          variant="outlined"
          fullWidth
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        />
        <TextField
          className="spacing"
          type="password"
          id="enter-password"
          label="Enter password"
          variant="outlined"
          fullWidth
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <Button
          className="spacing"
          theme={theme}
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </>
  );
};

export default SignIn;
