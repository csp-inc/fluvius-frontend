import React from "react";
import { Link } from "react-router-dom";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "./Navbar.css"
import itvlogo1 from "../images/itvlogo1.png";
import msftlogo from "../images/msftlogo1.png";
import allogo2 from "../images/al_logo2.png";

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
          <img class="footer-img" src={itvlogo1}/>
          <img class="footer-img" src={msftlogo}/>
          <img class="footer-img" src={allogo2}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
