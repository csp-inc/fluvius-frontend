import "../App.css";
import {Box, Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles';
import amazon_methods from "../images/amazon_methods.jpg";

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

const Metodologia = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center" >
      <Paper elevation={1} className={classes.box}>
        <Typography align="center" variant="h5">
	  Metodologia
	</Typography>
        <Typography className={classes.text}>
          <p>Beef chicken pork bacon chuck shortloin sirloin shank id, ea pig porkloin tail velit excepteur shortribs, brisket esse adipisicing labore consectetur flank tongue. Quis porkchop adipisicing proident tongue biltong porkbelly in prosciutto culpa, shank chicken ut hamhock excepteur turducken esse sausage. Excepteur sirloin cornedbeef aliqua flank in in porkchop leberkas tail, tempor nulla filetmignon veniam reprehenderit porchetta beef ea deserunt, duis shoulder in laborum est ham aute et. Consequat veniam in do capicola sirloin cow cupidatat adipisicing, pork velit cillum venison pariatur mollit jerky exercitation, sint tenderloin sunt labore jowl in aliqua. Excepteur kielbasa jowl ut fatback exercitation bresaola cow, boudin voluptate turducken est proident nisi filetmignon dolore, leberkas prosciutto porkbelly culpa tri-tip occaecat. Biltong beefribs dolore filetmignon turkey ut beef prosciutto, esse shankle andouille adipisicing shortribs nostrud excepteur, leberkas landjaeger tail hamburger eiusmod officia. Eiusmod spareribs swine beefribs eu dolore elit veniam shoulder flank incididunt, cow non andouille tongue consectetur laboris nostrud pastrami proident sirloin aute, ut meatball sed dolor officia voluptate consequat shortloin sunt.</p>
        </Typography>
      <Typography align="center">
        <img class="big-img" src={amazon_methods}/>
      </Typography>
      </Paper>
    </Box>
  );
}

export default Metodologia;
