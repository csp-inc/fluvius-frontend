import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {Box, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import trees from "../images/itv_tree.png";
import info from "../images/info.svg";
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
    fontSize: "24px",
    paddingTop: "18px",
    alignItems: "flex-end",
    color: "white"
  },
  button: {
    fontSize: "24px",
    color: "white"
  },
}));

export default function Navbar(props) {
  const {modal_en_setOpen, modal_pt_setOpen} = props;
  const location = useLocation();
  const port_eqv = (String(location.pathname).includes("sobre") ? "/about" : String(location.pathname).includes("metodologia") ? "/methodology" : "/"  ); 
  const isHome = (String(location.pathname).includes("sobre") ? false : String(location.pathname).includes("metodologia") ? false : true  ); 
  const classes = useStyles();
  const handleOpen = () => modal_pt_setOpen(true);
  const handleOpenEN = () => modal_en_setOpen(true);

  return (
    <Box className={classes.root}>
        <Box className={classes.pic} alignItems="flex-end">
          <img class="footer-img" alt="" src={trees}/>
        </Box>
        <Box className={classes.toggle} alignItems="left">
	  Fluvius
	  <Button className={classes.button} onClick={isHome ? handleOpen : {}}><img class="info-img" alt="" src={info}/></Button>
        </Box>
        <Box className={classes.title}>
	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} onClick={handleOpen} to="/pt_br/inicio">
            Inicio
          </NavLink>
	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} to="/pt_br/sobre">
            Sobre
          </NavLink>
	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} to="/pt_br/metodologia">
            Metodologia
          </NavLink>
        </Box>
        <Box className={classes.toggle} alignItmes="flex-end">
       	  <NavLink className={({isActive}) => (isActive ? "active" : "") + " navbar"} onClick={handleOpenEN} to={String(port_eqv)}>
            EN/US
          </NavLink>
        </Box>
    </Box>
  );
}
