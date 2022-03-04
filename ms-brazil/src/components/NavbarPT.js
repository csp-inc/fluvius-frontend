import React from "react";
import { NavLink } from "react-router-dom";
import {Box, Toolbar, Typography} from "@material-ui/core";
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
    flexGrow: 4,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "24px",
    color: "white"
  },
  toggle: {
    flexGrow: 1,
    display: "flex",
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
    <Box className={classes.root}>
        <Toolbar className={classes.title}>
          <Typography
            align="left"
            variant="h6"
            noWrap
          >
            <img class="footer-img" alt="" src={trees}/>
            Project Fluvius
	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} to="/pt_br/inicio">
            Inicio
          </NavLink>
	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} to="/pt_br/sobre">
            Sobre
          </NavLink>
	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} to="/pt_br/metodologia">
            Metodologia
          </NavLink>
          </Typography>
        </Toolbar>
        <Toolbar className={classes.toggle}>
          <Typography
            align="right"
            variant="h6"
            noWrap
          >
	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} to="/">
            EN/US
          </NavLink>
          </Typography>
        </Toolbar>
    </Box>
  );
}
