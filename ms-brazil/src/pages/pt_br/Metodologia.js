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

const Metodologia = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center" >
      <Paper elevation={1} className={classes.box}>
        <Typography align="center" variant="h5">
	  Metodologia
	</Typography>
        <Typography className={classes.text}>
          <p>O objetivo do projeto Fluvius é permitir a estimativa da qualidade da água a partir de imagens de satélite dos rios. Uma métrica importante do monitoramento da qualidade da água é a medida da concentração de sedimentos em suspensão (<a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://www.usgs.gov/special-topics/water-science-school/science/sediment-and-suspended-sediment#overview">CSS</a>), que é a medida do material em fase sólida dentro de uma coluna de água fixa. A análise CSS é um indicador comum da qualidade da água para sistemas aquáticos e ribeirinhos porque o sedimento é a causa mais comum de comprometimento de rios e córregos, lagos, reservatórios, lagoas e estuários. À medida que o CSS na água aumenta ou diminui devido à modificação do nível da paisagem, como desmatamento ou presença de agricultura, a qualidade visual da água também muda.</p>
          <p>Nesta análise, a ITV, em colaboração com a CSP e a Microsoft, usou imagens baseadas em satélite chamadas “chips” de imagem que foram tiradas no mesmo local e horário da amostragem CSS no solo das estações de medição. Usamos as características de luz desses chips de imagens e medições de campo para treinar e validar um modelo de aprendizado profundo. Com este modelo devidamente treinado, podemos fazer previsões de CSS não apenas para locais e horários em que temos medições terrestres, mas também para locais e horários em que tais medições estão totalmente ausentes.</p>
        </Typography>
        <Typography align="center" variant="h6">
          Os Dados
        </Typography>
        <Typography className={classes.text}>
          <p>Os dados de origem para este esforço de modelagem vieram de observações in situ (baseadas no solo) de CSS de rios e córregos no Brasil e nos Estados Unidos. Compilamos dados de ITV, <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://www.gov.br/ana/en">ANA</a> e <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://waterdata.usgs.gov/nwis/rt">USGS</a> e medidas de CSS convertidas para cada unidade de miligramas por litro (mg/L). Cada observação do CSS tem metadados e coordenadas associados que descrevem a hora e o local em que a medição foi feita. Usamos informações de geolocalização e carimbo de data/hora para associar cada observação a um <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2">Sentinel 2</a > imagem de satélite a ser usada para treinamento do modelo, em que as características espectrais dentro dos pixels de água no chip de imagem eram características no modelo e a medição CSS associada (transformada em log) é a resposta. Usamos dados da imagem Sentinel-2 L2A arquivada no <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://planetarycomputer.microsoft.com/dataset/sentinel-2-l2a#overview">Microsoft Planetary Computer< /a>.</p>
        </Typography>
        <Typography align="center" variant="h6">
          O Modelo
        </Typography>
        <Typography className={classes.text}>
          <p>Treinamos um modelo de aprendizado profundo, especificamente um <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://docs.microsoft.com/en-us/azure/machine-learning/concept-deep-learning-vs-machine-learning">Deep Neural Network</a>, usando os dados de recursos que extraímos para as observações CSS usando a biblioteca PyTorch em Python. Após a identificação do modelo superior, extraímos chips de imagem para todo o arquivo Sentinel-2 L2A em cada estação brasileira de monitoramento de água para implantar nosso modelo e gerar previsões de séries temporais de CSS.</p>
          <p>Mais informações sobre métodos e resultados podem ser encontradas em <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://github.com/csp-inc/fluvius/blob/main/docs/fluvius_executive_report_20220324.pdf">nosso relatório</a>.</p>
        </Typography>      <Typography align="center">
        <img class="big-img" alt="" src={amazon_methods}/>
      </Typography>
      </Paper>
    </Box>
  );
}

export default Metodologia;
