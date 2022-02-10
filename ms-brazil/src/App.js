import React, {useState, useEffect} from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import MapStations from "./components/MapStations"
import FluviusBox from "./components/FluviusBox"
import {Box, Container, Paper, Typography} from "@material-ui/core";
import {FlyToInterpolator} from 'react-map-gl';
import itvlogo1 from "./images/itvlogo1.png";
import itvlogo2 from "./images/itvlogo2.png";
import valelogo from "./images/vale-logo-8.png";
import msftlogo from "./images/msftlogo1.png";
import allogo from "./images/al_logo.png";
import allogo2 from "./images/al_logo2.png";

import axios from 'axios';

function App() {
  const [allData, setAllData]= useState([])
  const [popupInfo, setPopupInfo] = useState({});
  const [selectValue, setSelectValue] = useState('')
  const [cameraPic, setCameraPic] = useState('');
  const [cirPic, setCirPic] = useState('');
  const [swirPic, setSwirPic] = useState('');
  const [satellitePic, setSatellitePic] = useState('');
  const [viewport, setViewport] = useState({
    latitude: 20,
    longitude: -80,
    zoom: 2.45,
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
    <div className="App">
      <Navbar />
      <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center" >
        <Box md={6} sm={12} xs={12} flexGrow={1}>
          <Map allData={allData} popupInfo={popupInfo} setPopupInfo={setPopupInfo} selectValue={selectValue} setSelectValue={setSelectValue} viewport={viewport} setViewport={setViewport} onSelectStation={onSelectStation}/>
        </Box>

        <Box item md={6} sm={12} xs={12} flexGrow={0}>
          <MapStations allData={allData}  popupInfo={popupInfo} setPopupInfo={setPopupInfo}  selectValue={selectValue} setSelectValue={setSelectValue} onSelectStation={onSelectStation}/>
        </Box>
      </Box>

      {Object.keys(popupInfo).length === 0 && (
          <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center" style={{color: "white"}}>
              <p>Select a station by clicking a red marker on the map or from the dropdown menu.</p>
          </Box>
      )}

      {Object.keys(popupInfo).length !== 0 && (
          <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center">
              <FluviusBox allData={allData} popupInfo={popupInfo} cameraPic={cameraPic} setCameraPic={setCameraPic} cirPic={cirPic} setCirPic={setCirPic} swirPic={swirPic} setSwirPic={setSwirPic} satellitePic={satellitePic} setSatellitePic={setSatellitePic}/>
          </Box>
      )}

      {/* 
      <Box display="flex" flexDirection="row" >
          <div style={{backgroundColor: "#636466", height: "40px", width: "sw", }}></div>
      </Box> 
      */}
      <Box sx={{ padding: "80px 60px", background: "#00FF00", position: "absolute", bottom: 0, height: "60px", width: "98%" }} display="flex" flexWrap="wrap" justifyContent="right" >
                    <img class="footer-img" src={itvlogo1}/>
                    <img class="footer-img" src={itvlogo2}/>
                    <img class="footer-img" src={valelogo}/>
                    <img class="footer-img" src={msftlogo}/>
                    <img class="footer-img" src={allogo}/>
                    <img class="footer-img" src={allogo2}/>
      </Box> 
    </div>
  );
}

export default App;
