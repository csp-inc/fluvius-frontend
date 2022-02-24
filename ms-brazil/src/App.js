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
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
	position: 'absolute',
        bottom: 0,
	right: 0,
	backgroundColor: "blue",
	width: '98%'
    }
  }));

const App = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box flexGrow={9}>
      <Navbar />
      <Main />
      </Box>
	<Box alignSelf="flex-end" alignItems="flex-end" flexGrow={1} bgcolor="#00FF00">
	  <div className={classes.footer}>
          <img class="footer-img" src={itvlogo1}/>
          <img class="footer-img" src={itvlogo2}/>
          <img class="footer-img" src={valelogo}/>
          <img class="footer-img" src={msftlogo}/>
          <img class="footer-img" src={allogo}/>
          <img class="footer-img" src={allogo2}/>
	  </div>
        </Box> 
    </Box>
  );
}

export default App;
