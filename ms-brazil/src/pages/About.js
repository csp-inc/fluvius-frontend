import "../App.css";
import {Box, Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    box: {
        minWidth: 900,
        color: "white",
        fontWeight: 800,
        fontSize: 48,
	padding: '25px',
        backgroundColor: "black"
    }
  }));

const About = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center" >
      <Paper elevation={1} className={classes.box}>
        <Typography align="center" variant="h6">
	  About the Project
	</Typography>
        <Typography variant="body1">
          <p>The process of soil erosion involves the removal of soil materials from a site by natural and anthropogenic factors. Natural factors include wind and water, but human activity -- deforestation, for instance -- can increase rates of erosion well above natural, background levels. Increased erosion causes environmental damage, including greater sediment loads in the watershed, which in turn negatively impact water quality and aquatic ecosystems, in addition to creating social and economic losses. Traditionally, sediment loads are monitored by assessing the concentration of sediment suspended in water samples. However, ground-based measurements can be slow, hazardous, and costly to obtain, and produce sparse datasets that make monitoring and change detection difficult. Improving our understanding of hydrosedimentological processes will require higher frequency information at much larger spatial extents. The use of satellite imagery to characterize sediment loads is a well-recognized, increasingly effect complement to ground-based sampling. The fluvius project aims to develop tools to monitor hydrosedimenological processes in rivers, including suspended sediment. We improve on ground-based observations by using Artificial Intelligence models to make predictions of suspended sediment at any site and any time for which there is reliable imagery. A pilot study is being carried out in the Itacaiúnas River Basin (BHRI). Preliminary results highlight the potential of the approach, enabling future expansion of monitoring for the entire Amazon basin.</p>
        </Typography>
      </Paper>
    </Box>
  );
}

export default About;
