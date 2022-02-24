import "./App.css";
import Main from "./Main";
import Navbar from "./components/Navbar";
import {Box} from "@material-ui/core";
import itvlogo1 from "./images/itvlogo1.png";
import itvlogo2 from "./images/itvlogo2.png";
import valelogo from "./images/vale-logo-8.png";
import msftlogo from "./images/msftlogo1.png";
import allogo from "./images/al_logo.png";
import allogo2 from "./images/al_logo2.png";

import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Box sx={{ padding: "80px 60px", background: "#00FF00", position: "absolute", bottom: 0, height: "60px", width: "98%" }} display="flex" flexWrap="wrap" justifyContent="right" >
                    <img class="footer-img" src={itvlogo1}/>
                    <img class="footer-img" src={itvlogo2}/>
                    <img class="footer-img" src={valelogo}/>
                    <img class="footer-img" src={msftlogo}/>
                    <img class="footer-img" src={allogo}/>
                    <img class="footer-img" src={allogo2}/>
      </Box> 
    </div>
  );
}

export default App;
