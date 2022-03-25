import {Box, Toolbar} from "@material-ui/core";
import itvlogo from "../images/itv_colorida.png";
import msftlogo from "../images/microsoft_white.png";
import allogo2 from "../images/al_logo2.png";

export default function Footer() {
  return (
    <Box bgcolor="black" display="flex">
      <Toolbar>
        <img class="footer-img" alt="" src={itvlogo}/>
        <img class="footer-img" alt="" src={msftlogo}/>
        <img class="footer-img" alt="" src={allogo2}/>
      </Toolbar>
    </Box>
  );
}
