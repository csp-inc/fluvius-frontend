import React from "react";
import { Link } from "react-router-dom";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    zIndex: 50
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "24px",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            align="left"
            className={classes.title}
            variant="h6"
            noWrap
          >
            Project Fluvius - Data Visualization{" "}
	  <Link to="/">
            Home
          </Link>
	  <Link to="/about">
            About
          </Link>
	  <Link to="/methodology">
            Methodology
          </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
