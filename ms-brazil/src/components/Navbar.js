import React from "react";
import { Link } from "react-router-dom";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "./Navbar.css"

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
    color: "white"
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Toolbar>
          <Typography
            align="left"
            className={classes.title}
            variant="h6"
            noWrap
          >
            Project Fluvius
	  <div class="mid">
	  <ul class="navbar">
	  <li>
	  <Link to="/">
            Home
          </Link>
	  </li>
	  <li>
	  <Link to="/about">
            About
          </Link>
	  </li>
	  <li>
	  <Link to="/methodology">
            Methodology
          </Link>
	  </li>
	  </ul>
	  </div>
          </Typography>
        </Toolbar>
    </div>
  );
}
