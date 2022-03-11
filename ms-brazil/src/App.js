import "./App.css";
import React from 'react';
import Main from "./Main";
import Navbar from "./components/Navbar";
import NavbarPT from "./components/NavbarPT";
import Footer from "./components/Footer";
import modalgraphic from "./images/modal_graphic.png";
import { Box, Typography, Modal } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	head: {
          borderBottom: '2px solid white', 
	},
	foot: {
          borderTop: '2px solid white', 
	},
	centertypography: {
          margin: '20px', 
	},
	modstyle: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: 1000,
          width: 800,
          backgroundColor: 'white',
	  color: 'black',
          border: '20px solid white',
	  display: "flex",
	  flexDirection: "column",
	},
}));
//          {({location}) => (String(location.pathname).includes("pt_br") ? <NavbarPT /> : <Navbar /> )} 


const App = () => {
  const location = useLocation();
  const portuguese = (String(location.pathname).includes("pt_br") ? true : false ); 
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box alignItems="center" justifyContent="center" className={classes.modstyle}>
          <Typography align="center" id="modal-modal-title" variant="h6" component="h2">
            Welcome to the Project Fluvius interactive map! 
          </Typography>
          <Typography id="modal-modal-description" className={classes.centertypography}>
            Explore the page to display predictions of suspended sediment over time within various water quality stations in the Itacaiúnas River Basin (BHRI). These estimates of suspended sediment are driven by a deep learning (AI) model using data from Microsoft Planetary Computer and satellite imagery provided by the European Space Agency (Sentinel-2). Below is a diagram of how to navigate the page.
          </Typography>
            <img class="modal-img" alt="" src={modalgraphic}/>
        </Box>
      </Modal>
      <Box flexGrow={1}>
        <Box className={classes.head} height="100%">
	  {portuguese ? <NavbarPT /> : <Navbar /> }
	</Box>
      </Box>
      <Box flexGrow={18}>
        <Box height="100%">
	  <Main />
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
