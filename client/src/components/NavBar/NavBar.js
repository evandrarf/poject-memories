import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import useStyles from "./style";

import memories from "../../images/memories.png";

import ProfileMenu from "./Menu/ProfileMenu";

const NavBar = ({ user, setUser }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    // JWT ...
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img className={classes.image} src={memories} alt="memories" />
        </div>
        <Toolbar className={classes.toolbar}>
          <ProfileMenu user={user} className={classes.menu} logout={logout} />
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.result.name}
              </Typography>
              <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button component={Link} to="/auth" className={classes.signin} variant="contained" color="primary">
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
