import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {Box} from "@material-ui/core";
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
    flexGrow: 15,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "24px",
    paddingTop: "18px",
    color: "white"
  },
  pic: {
    flexGrow: 1,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "24px",
    color: "white"
  },
  toggle: {
    flexGrow: 3,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "24px",
    paddingTop: "18px",
    alignItems: "flex-end",
    color: "white"
  },
}));

export default function Navbar() {
  const location = useLocation();
  const port_eqv = (String(location.pathname).includes("about") ? "sobre" : String(location.pathname).includes("methodology") ? "metodologia" : "inicio"  ); 
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        <Box className={classes.pic} alignItems="flex-end">
          <img class="footer-img" alt="" src={trees}/>
        </Box>
        <Box className={classes.toggle} alignItems="left">
          Project Fluvius
        </Box>
        <Box className={classes.title}>
	  <NavLink exact className={({isActive}) => (isActive ? "active" : "") + " navbar"} to="/">
            Home
          </NavLink>
	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} to="/about">
            About
          </NavLink>
	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} to="/methodology">
            Methodology
          </NavLink>
        </Box>
        <Box className={classes.toggle} alignItmes="flex-end">
	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} to={"/pt_br/" + String(port_eqv)}>
            PT/BR
          </NavLink>
        </Box>
    </Box>
  );
}
