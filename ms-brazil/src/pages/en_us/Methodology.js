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
          <p>The goal of the Fluvius model was to enable predictions of suspended sediment concentration (SSC) from Sentinel 2 satellite imagery. We extracted image "chips" for all dates and locations for which we had SSC observations from USGS, USGSI, ITV, and ANA gauging stations, and used the Sentinel 2 bands of that image as input to a multi-layer perceptron model (MLP), which is a type of neural network, to predict SSC. After training and validating the model, we were able to make predictions of SSC not only for sites and times at which we have ground-based measures, but at sites and times for which such measures are lacking entirely.</p>
        </Typography>
      <Typography align="center">
        <img class="big-img" alt="" src={amazon_methods}/>
      </Typography>
      </Paper>
    </Box>
  );
}

export default Methodology;
