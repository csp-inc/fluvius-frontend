import {Box, Toolbar} from "@material-ui/core";
import itvlogo3 from "../images/itvlogo3.png";
import msftlogo from "../images/MICROSOFT_logo.png";
import allogo2 from "../images/al_logo2.png";

export default function Footer() {
  return (
    <Box bgcolor="black" display="flex">
      <Toolbar>
        <img class="footer-img" alt="" src={itvlogo3}/>
        <img class="footer-img" alt="" src={msftlogo}/>
        <img class="footer-img" alt="" src={allogo2}/>
      </Toolbar>
    </Box>
  );
}
