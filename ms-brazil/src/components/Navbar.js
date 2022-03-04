import React from "react";
import { NavLink } from "react-router-dom";
import {Toolbar, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import trees from "../images/itv_tree.png";
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
            <img class="footer-img" alt="" src={trees}/>
            Project Fluvius
	  <NavLink exact className={({isActive}) => (isActive ? "active" : "") + " navbar"} to="/">
            Home
          </NavLink>
	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} to="/about">
            About
          </NavLink>
	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} to="/methodology">
            Methodology
          </NavLink>
          </Typography>
          <Typography
            align="right"
            className={classes.title}
            variant="h6"
            noWrap
          >
	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} to="/pt_br/inicio">
            PT/BR
          </NavLink>
          </Typography>
        </Toolbar>
    </div>
  );
}
