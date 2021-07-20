import React, {useState, useEffect} from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import MapStations from "./components/MapStations"
import FluviusBox from "./components/FluviusBox"
import {Box, Container} from "@material-ui/core";

import axios from 'axios';

function App() {
  const [allData, setAllData]= useState([])
  const [popupInfo, setPopupInfo] = useState({});
  const [stationName, setStationName] = useState('');

  useEffect(() => {
    axios.get('https://fluviusdata.blob.core.windows.net/app/all_data.json')
    .then(res=> {
        setAllData(res.data);
    })
    .catch(err => {
        console.log(err);
    })

}, [popupInfo])

  return (
    <div className="App">
      <Navbar />
      <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center" >
        <Box md={6} sm={12} xs={12} flexGrow={1}>
          <Map allData={allData} popupInfo={popupInfo} setPopupInfo={setPopupInfo} />
        </Box>

        <Box item md={6} sm={12} xs={12} >
          <MapStations allData={allData}  popupInfo={popupInfo} setPopupInfo={setPopupInfo} onClick={setStationName} stationName={stationName}  />
        </Box>
      </Box>

      <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="center">
        <Box flexGrow={1}>
          <FluviusBox />
        </Box>

      </Box>
    </div>
  );
}

export default App;
