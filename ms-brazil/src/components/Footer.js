import {Box, Toolbar} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import itvlogo from "../images/itv_colorida.png";
import msftlogo from "../images/microsoft_white.png";
import allogo2 from "../images/al_logo2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "black",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Toolbar>
        <img class="footer-img" alt="" src={itvlogo}/>
        <img class="footer-img" alt="" src={msftlogo}/>
        <img class="footer-img" alt="" src={allogo2}/>
      </Toolbar>
    </Box>
  );
}
