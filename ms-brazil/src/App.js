import React from "react";
import "./App.css";
import Main from "./Main";
import Navbar from "./components/Navbar";
import NavbarPT from "./components/NavbarPT";
import Footer from "./components/Footer";
import { Box } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	head: {
          borderBottom: '2px solid white', 
	  position: 'sticky',
	  top: '0px',
	  zIndex: 1100,
	  backgroundColor: "black",
	},
	main: {
	  minHeight: '88vh',
	  position: 'relative',
	  zIndex: 900,
	},
	foot: {
          borderTop: '2px solid white', 
	  position: 'sticky',
	  bottom: '0px',
	  zIndex: 1100,
	  backgroundColor: "black",
	},
}));


const App = () => {
  const [modal_en_open, modal_en_setOpen] = React.useState(true);
  const [modal_pt_open, modal_pt_setOpen] = React.useState(true);
  const location = useLocation();
  const portuguese = (String(location.pathname).includes("pt_br") ? true : false ); 
  const classes = useStyles();
  return (
    <Box>
        <Box className={classes.head} height="5.25vh">
	  {portuguese ? <NavbarPT modal_en_setOpen={modal_en_setOpen} modal_pt_setOpen={modal_pt_setOpen}/> : <Navbar modal_en_setOpen={modal_en_setOpen} modal_pt_setOpen={modal_pt_setOpen}/> }
	</Box>
        <Box className={classes.main} height="auto">
	  <Main modal_en_open={modal_en_open} modal_en_setOpen={modal_en_setOpen} modal_pt_open={modal_pt_open} modal_pt_setOpen={modal_pt_setOpen}/>
	</Box>
        <Box className={classes.foot} display="flex" justifyContent="right" alignItems="flex-end" height="6vh">
	    <Footer />
	</Box>
    </Box>
  );
}

export default App;
