import "../App.css";
import {Box, Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/styles';
import amazonas from "../images/amazonas.jpg";

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

const Sobre = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center" >
      <Paper elevation={1} className={classes.box}>
        <Typography align="center" variant="h5">
	  Sobre o Projeto
	</Typography>
        <Typography className={classes.text}>
          <p>O processo de erosão do solo envolve a remoção de materiais do solo de um local por fatores naturais e antrópicos. Fatores naturais incluem vento e água, mas a atividade humana – desmatamento, por exemplo – pode aumentar as taxas de erosão bem acima dos níveis naturais de fundo. O aumento da erosão causa danos ambientais, incluindo maiores cargas de sedimentos na bacia, que por sua vez impactam negativamente na qualidade da água e nos ecossistemas aquáticos, além de gerar prejuízos sociais e econômicos. Tradicionalmente, as cargas de sedimentos são monitoradas por meio da avaliação da concentração de sedimentos em suspensão nas amostras de água. No entanto, medições terrestres podem ser lentas, perigosas e caras para obter, e produzem conjuntos de dados esparsos que dificultam o monitoramento e a detecção de alterações. Melhorar nossa compreensão dos processos hidrossedimentológicos exigirá informações de frequência mais alta em extensões espaciais muito maiores. O uso de imagens de satélite para caracterizar cargas de sedimentos é um complemento bem reconhecido e cada vez mais eficaz para a amostragem terrestre. O projeto fluvius visa desenvolver ferramentas para monitorar processos hidrossedimenológicos em rios, incluindo sedimentos em suspensão. Melhoramos as observações terrestres usando modelos de Inteligência Artificial para fazer previsões de sedimentos suspensos em qualquer local e a qualquer momento para o qual haja imagens confiáveis. Um estudo piloto está sendo realizado na Bacia do Rio Itacaiúnas (BHRI). Os resultados preliminares destacam o potencial da abordagem, possibilitando futura expansão do monitoramento para toda a bacia amazônica.</p>
        </Typography>
      <Typography align="center">
      <img class="big-img" src={amazonas}/>
      </Typography>
      </Paper>
    </Box>
  );
}

export default Sobre;
