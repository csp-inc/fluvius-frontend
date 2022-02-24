import "../App.css";
import {Box, Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    box: {
        minWidth: 900,
        minHeight: 975,
        backgroundColor: "black"
    },
    stationDetails: {
        width: "430px",
        marginLeft: "30px",
        color: "white",
        fontWeight: 800,
        padding: "25px",
        backgroundColor: "black"
  }
  }));


const About = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center" >
    <Paper elevation={3} className={classes.box}>
      <Paper className={classes.stationDetails} elevation={0}>
        <br></br>
          <Typography variant="body1">
            <br></br>
                <b>Project Overview:</b>
                <p>Project Fluvius uses satellite images and AI to monitor the health of Amazon and U.S. rivers by enabling near real-time prediction of suspended sediment concentration. </p>
          </Typography>
      </Paper>

      </Paper>
      </Box>
    </div>
  );
}

export default About;
