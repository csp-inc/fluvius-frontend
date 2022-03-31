import React, {useState, useEffect} from 'react'
import "../../App.css";
import Map from "../../components/Map";
import MapStationsPT from "../../components/MapStationsPT"
import FluviusBoxPT from "../../components/FluviusBoxPT"
import modalgraphic from "../../images/modal_graphic_pt.png";
import {Box, Typography, Modal} from "@material-ui/core";
import {FlyToInterpolator} from 'react-map-gl';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	homestyle: {
          paddingTop: '1vh', 
	},
	modaltitle: {
          margin: '1vh', 
	  fontSize: 'calc(30% + 0.75vh + 0.15vw)',
	},
	centertypography: {
          margin: '1vh', 
	  fontSize: 'calc(25% + 0.60vh + 0.10vw)',
	},
	modstyle: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: 'auto',
	  maxHeight: '70vh',
          width: 'auto',
	  maxWidth: '50vw',
          backgroundColor: 'white',
	  color: 'black',
          border: '1vh solid white',
	  display: "flex",
	  flexDirection: "column",
	},
}));

function Inicio(props) {
  const classes = useStyles();
  const {modal_pt_open, modal_pt_setOpen} = props;
  const handleClose = () => modal_pt_setOpen(false);
  const [allData, setAllData]= useState([])
  const [popupInfo, setPopupInfo] = useState({});
  const [selectValue, setSelectValue] = useState('')
  const [cameraPic, setCameraPic] = useState('');
  const [cirPic, setCirPic] = useState('');
  const [swirPic, setSwirPic] = useState('');
  const [satellitePic, setSatellitePic] = useState('');
  const [viewport, setViewport] = useState({
    latitude: -12,
    longitude: -50,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  });

  async function onSelectStation(pin) {
    setViewport({
      latitude: pin.Latitude,
      longitude: pin.Longitude,
      zoom: 8,
      transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
      transitionDuration: 'auto'
    })
  };

  useEffect(() => {
    setCameraPic('');
    setCirPic('');
    setSwirPic('');
    setSatellitePic('');
  }, [popupInfo])

  useEffect(() => {
    axios.get('https://fluviusdata.blob.core.windows.net/app/all_data_v4.json')
    .then(res=> {
        setAllData(res.data);
    })
    .catch(err => {
        console.log(err);
    })
}, [])

  return (
    <Box className={classes.homestyle}>
      <Modal
        open={modal_pt_open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box alignItems="center" justifyContent="center" className={classes.modstyle}>
          <Typography align="center" id="modal-modal-title" variant="h6" component="h2" className={classes.modaltitle}>
            Bem-vindo ao mapa interativo do Fluvius! 
          </Typography>
          <Typography id="modal-modal-description" className={classes.centertypography}>
            Explore a página para exibir as previsões de sedimentos em suspensão ao longo do tempo em várias estações de qualidade da água na Bacia do Rio Itacaiúnas (BHRI). Essas estimativas da concentração de sedimentos suspensos (CSS) são conduzidas por um modelo de aprendizado profundo (AI) usando dados do Microsoft Planetary Computer e imagens de satélite fornecidas pela Agência Espacial Européia (Sentinel-2). Abaixo está um diagrama de como navegar na página.
          </Typography>
            <img class="modal-img" alt="" src={modalgraphic}/>
        </Box>
      </Modal>
      <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center" >
        <Box md={6} sm={12} xs={12} flexGrow={1}>
          <Map allData={allData} popupInfo={popupInfo} setPopupInfo={setPopupInfo} selectValue={selectValue} setSelectValue={setSelectValue} viewport={viewport} setViewport={setViewport} onSelectStation={onSelectStation}/>
        </Box>

        <Box item md={6} sm={12} xs={12} flexGrow={0}>
          <MapStationsPT allData={allData}  popupInfo={popupInfo} setPopupInfo={setPopupInfo}  selectValue={selectValue} setSelectValue={setSelectValue} onSelectStation={onSelectStation}/>
        </Box>
      </Box>

      {Object.keys(popupInfo).length === 0 && (
          <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center" style={{color: "white"}}>
              <p>Selecione uma estação clicando em um marcador vermelho no mapa ou no menu suspenso.</p>
          </Box>
      )}

      {Object.keys(popupInfo).length !== 0 && (
          <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center">
              <FluviusBoxPT allData={allData} popupInfo={popupInfo} cameraPic={cameraPic} setCameraPic={setCameraPic} cirPic={cirPic} setCirPic={setCirPic} swirPic={swirPic} setSwirPic={setSwirPic} satellitePic={satellitePic} setSatellitePic={setSatellitePic}/>
          </Box>
      )}

    </Box>
  );
}

export default Inicio;
