import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
//import { makeStyles } from "@mui/styles";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { publicConstants } from "../PublicConstants";
import { signOut } from "../../store/actions/authActions";

const { theme } = publicConstants;
/*const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
  },
});*/

const NavBar = () => {
//  const classes = useStyles();
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
          <Typography variant="h4" /*className={classes.root}*/>
            <Link 
            //className={classes.linkStyle} 
            to="/">
              To do app
            </Link>
          </Typography>
          {auth._id ? (
            <>
              <Typography variant="subtitle2" /*className={classes.root}*/>
                logged in as {auth.name}
              </Typography>
              <Button color="inherit" onClick={() => handleSignOut()}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link /*className={classes.linkStyle}*/ to="/signin">
                  Sign in
                </Link>
              </Button>
              <Button color="inherit">
                <Link /*className={classes.linkStyle}*/ to="/signup">
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
