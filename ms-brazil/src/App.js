import React, {useState, useEffect} from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import MapStations from "./components/MapStations"
import FluviusBox from "./components/FluviusBox"
import {Box, Container} from "@material-ui/core";
import {FlyToInterpolator} from 'react-map-gl';

import axios from 'axios';

function App() {
  const [allData, setAllData]= useState([])
  const [popupInfo, setPopupInfo] = useState({});
  const [selectValue, setSelectValue] = useState('')

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
    axios.get('https://fluviusdata.blob.core.windows.net/app/all_data.json')
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

        <Box item md={6} sm={12} xs={12} >
          <MapStations allData={allData}  popupInfo={popupInfo} setPopupInfo={setPopupInfo}  selectValue={selectValue} setSelectValue={setSelectValue} onSelectStation={onSelectStation}/>
        </Box>
      </Box>

      <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center">
        <Box flexGrow={1}>
          <FluviusBox allData={allData} popupInfo={popupInfo}/>
        </Box>

      </Box>
    </div>
  );
}

export default App;
