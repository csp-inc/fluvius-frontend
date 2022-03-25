import "../../App.css";
import {Box, Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles';
import amazon_methods from "../../images/amazon_methods.jpg";

const useStyles = makeStyles((theme) => ({
    box: {
        minWidth: 900,
        color: "white",
        backgroundColor: "black",
	marginTop: '2%',
	marginLeft: '10%',
	marginRight: '10%'
    },
    text: {
        fontSize: 20
    },
    link: {
        color:"#5083CC",
    }
  }));

const Methodology = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center" >
      <Paper elevation={1} className={classes.box}>
        <Typography align="center" variant="h5">
	  Methodology
	</Typography>
        <Typography className={classes.text}>
          <p>The goal of the Fluvius project is to enable estimation of water quality given satellite imagery of rivers. One major metric of water quality monitoring is the measure of suspended sediment concentration (<a className={classes.link} href="https://www.usgs.gov/special-topics/water-science-school/science/sediment-and-suspended-sediment#overview">SSC</a>), which is the measure of solid-phase material within a fixed water column. SSC analysis is a common indicator of water quality for aquatic and riparian systems because sediment is the most widespread cause of impairment of rivers and streams, lakes, reservoirs, ponds, and estuaries. As SSC in water increases or decreases due to landscape level modification such as deforestation or presence of agriculture, the visual quality of the water changes as well.</p>
	  <p>In this analysis ITV, in collaboration with CSP and Microsoft, used satellite based images called image “chips” that were taken at the same location and time of SSC sampling on the ground from gaging stations. We used the light characteristics of these images chips and field measurements to train and validate a deep learning model. With this properly trained model, we can make predictions of SSC not only for sites and times at which we have ground-based measurements, but also to sites and times at which such measurements are lacking entirely.</p>
        </Typography>
        <Typography align="center" variant="h6">
	  The Data
	</Typography>
        <Typography className={classes.text}>
	  <p>The source data for this modeling effort came from in-situ (ground based) observations of SSC from rivers and streams in both Brazil and the United States. We compiled data from ITV, <a className={classes.link} href="https://www.gov.br/ana/en">ANA</a>, and the <a className={classes.link} href="https://waterdata.usgs.gov/nwis/rt">USGS</a> and converted SSC measurements for each to units of milligrams per liter (mg/L). Each SSC observation has associated metadata and coordinates describing the time and site at which the measurement was taken. We used geolocation and timestamp information to associate each observation with a <a className={classes.link} href="https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2">Sentinel 2</a> satellite image to use for model training, wherein the spectral characteristics within water pixels in the image chip were features in the model, and the associated SSC measurement (log-transformed) is the response. We used data from the Sentinel-2 L2A image archived in the <a className={classes.link} href="https://planetarycomputer.microsoft.com/dataset/sentinel-2-l2a#overview">Microsoft Planetary Computer</a>.</p>
        </Typography>
        <Typography align="center" variant="h6">
	  The Model
	</Typography>
        <Typography className={classes.text}>
	  <p>We trained a deep learning model, specifically a <a className={classes.link} href="https://docs.microsoft.com/en-us/azure/machine-learning/concept-deep-learning-vs-machine-learning">Deep Neural Network</a>, using the feature data we extracted for the SSC observations using the PyTorch library in Python. Following the identification of the top model, we extracted image chips for the entire Sentinel-2 L2A archive at each Brazilian water monitoring station to deploy our model and generate time series predictions of SSC.</p>
	  <p>More information on methods and results can be found in <a className={classes.link} href="https://github.com/csp-inc/fluvius/blob/main/docs/fluvius_executive_report_20220324.pdf">our report</a>.</p>
        </Typography>
        <Typography align="center">
          <img class="big-img" alt="" src={amazon_methods}/>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Methodology;
