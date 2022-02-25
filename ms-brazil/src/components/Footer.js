import {Box, Toolbar} from "@material-ui/core";
import itvlogo1 from "../images/itvlogo1.png";
import msftlogo from "../images/msftlogo1.png";
import allogo2 from "../images/al_logo2.png";

export default function Footer() {
  return (
    <Box bgcolor="black" display="flex">
      <Toolbar>
        <img class="footer-img" src={itvlogo1}/>
        <img class="footer-img" src={msftlogo}/>
        <img class="footer-img" src={allogo2}/>
      </Toolbar>
    </Box>
  );
}
