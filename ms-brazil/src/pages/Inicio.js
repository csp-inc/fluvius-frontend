import React, {useState, useEffect} from 'react'
import "../App.css";
import Map from "../components/Map";
import MapStationsPT from "../components/MapStationsPT"
import FluviusBoxPT from "../components/FluviusBoxPT"
import {Box} from "@material-ui/core";
import {FlyToInterpolator} from 'react-map-gl';

import axios from 'axios';

function Inicio() {
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
    <Box>
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
