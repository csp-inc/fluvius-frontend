import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {Box, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import trees from "../images/itv_tree.png";
import info from "../images/global_i.png";
import "./Navbar.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "black",
  },
  title: {
    flexGrow: 15,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "2vh",
    paddingTop: "1vh",
    color: "white"
  },
  pic: {
    flexGrow: 1,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "2vh",
    color: "white"
  },
  modal: {
    flexGrow: 3,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    paddingTop: "10px",
    alignItems: "flex-end",
  },
  toggle: {
    flexGrow: 3,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "2vh",
    paddingTop: "1vh",
    alignItems: "flex-end",
    color: "white"
  },
  lefttoggle: {
    flexGrow: 3,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "2vh",
    paddingTop: "0.25vh",
    alignItems: "flex-end",
    color: "white"
  },
  button: {
    fontSize: "2vh",
    color: "white"
  },
  fakebutton: {
    fontSize: "2vh",
    visibility: "hidden",
    color: "white"
  },
}));

export default function Navbar(props) {
  const {modal_en_setOpen, modal_pt_setOpen} = props;
  const location = useLocation();
  const port_eqv = (String(location.pathname).includes("about") ? "sobre" : String(location.pathname).includes("methodology") ? "metodologia" : "inicio"  ); 
  const isHome = (String(location.pathname).includes("about") ? false : String(location.pathname).includes("methodology") ? false : true); 
  const classes = useStyles();
  const handleOpen = () => modal_en_setOpen(true);
  const handleOpenPT = () => modal_pt_setOpen(true);

  return (
    <Box className={classes.root}>
        <Box className={classes.pic} alignItems="flex-end">
          <img class="header-img" alt="" src={trees}/>
        </Box>
        <Box className={classes.lefttoggle} alignItems="left">
	  Fluvius
	  {isHome ? <Button className={classes.button} onClick={handleOpen}><img class="info-img" alt="" src={info}/></Button> : <Button className={classes.fakebutton}><img class="info-img" alt="" src={info}/></Button> }
        </Box>
        <Box className={classes.title}>
	  <NavLink exact className={({isActive}) => (isActive ? "active" : "") + " navbar"} onClick={handleOpen} to="/">
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
	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} onClick={handleOpenPT} to={"/pt_br/" + String(port_eqv)}>
            PT/BR
          </NavLink>
        </Box>
    </Box>
  );
}
