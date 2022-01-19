import React, {useState, useEffect} from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import MapStations from "./components/MapStations"
import FluviusBox from "./components/FluviusBox"
import {Box, Container, Paper, Typography} from "@material-ui/core";
import {FlyToInterpolator} from 'react-map-gl';

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
    axios.get('https://fluviusdata.blob.core.windows.net/app/all_data_v3.json')
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

    </div>
  );
}

export default App;
