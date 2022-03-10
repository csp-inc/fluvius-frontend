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

const Metodologia = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center" >
      <Paper elevation={1} className={classes.box}>
        <Typography align="center" variant="h5">
	  Metodologia
	</Typography>
        <Typography className={classes.text}>
          <p>O objetivo do modelo Fluvius era permitir previsões de concentração de sedimentos em suspensão (CSS) a partir de imagens de satélite Sentinel 2. Extraímos "chips" de imagem para todas as datas e locais para os quais tivemos observações CSS das estações de medição USGS, USGSI, ITV e ANA e usamos as bandas Sentinel 2 dessa imagem como entrada para um modelo perceptron multicamada, que é um tipo de rede neural, para prever CSS. Após treinar e validar o modelo, conseguimos fazer previsões de CSS não apenas para locais e horários em que temos medidas terrestres, mas em locais e horários para os quais tais medidas são totalmente inexistentes.</p>
        </Typography>
      <Typography align="center">
        <img class="big-img" alt="" src={amazon_methods}/>
      </Typography>
      </Paper>
    </Box>
  );
}

export default Metodologia;
