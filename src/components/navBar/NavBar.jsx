import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import "../../styles/NavBar.css";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { publicConstants } from "../PublicConstants";
import { signOut } from "../../store/actions/authActions";

const { theme } = publicConstants;

const NavBar = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/signin");
  };
  return (
    <>
      <AppBar position="static" theme={theme}>
        <Toolbar>
          <Typography variant="h4" className="root">
            <Link className="link-style" to="/">
              To do app
            </Link>
          </Typography>
          {auth._id ? (
            <>
              <Typography variant="subtitle2" className="root">
                logged in as {auth.name}
              </Typography>
              <Button color="inherit" onClick={() => handleSignOut()}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link className="link-style" to="/signin">
                  Sign in
                </Link>
              </Button>
              <Button color="inherit">
                <Link className="link-style" to="/signup">
                  Sign up
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
