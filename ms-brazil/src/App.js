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
	},
	foot: {
          borderTop: '2px solid white', 
	},
}));


const App = () => {
  const [modal_en_open, modal_en_setOpen] = React.useState(true);
  const [modal_pt_open, modal_pt_setOpen] = React.useState(true);
  const location = useLocation();
  const portuguese = (String(location.pathname).includes("pt_br") ? true : false ); 
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box flexGrow={1}>
        <Box className={classes.head} height="100%">
	  {portuguese ? <NavbarPT modal_en_setOpen={modal_en_setOpen} modal_pt_setOpen={modal_pt_setOpen}/> : <Navbar modal_en_setOpen={modal_en_setOpen} modal_pt_setOpen={modal_pt_setOpen}/> }
	</Box>
      </Box>
      <Box flexGrow={18}>
        <Box height="100%">
	  <Main modal_en_open={modal_en_open} modal_en_setOpen={modal_en_setOpen} modal_pt_open={modal_pt_open} modal_pt_setOpen={modal_pt_setOpen}/>
	</Box>
      </Box>
      <Box flexGrow={1}>
        <Box className={classes.foot} display="flex" justifyContent="right" alignItems="flex-end" height="100%">
	    <Footer />
	</Box>
      </Box>
    </Box>
  );
}

export default App;
