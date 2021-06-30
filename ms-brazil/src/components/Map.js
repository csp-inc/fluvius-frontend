import * as React from 'react';
import {useState} from 'react';
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import mapboxgl from "mapbox-gl";

import ControlPanel from './ControlPanel';
// import Pins from './Pins';
// import CityInfo from './City-info';
// import CITIES from '../data/cities.json';

import MapStyle from "./MapStyle.json"

const TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'; 

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

// const geolocateStyle = {
//   top: 0,
//   left: 0,
//   padding: '10px'
// };

// const fullscreenControlStyle = {
//   top: 36,
//   left: 0,
//   padding: '10px'
// };

// const navStyle = {
//   top: 72,
//   left: 0,
//   padding: '10px'
// };

// const scaleControlStyle = {
//   bottom: 36,
//   left: 0,
//   padding: '10px'
// };

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  });
//   const [popupInfo, setPopupInfo] = useState(null);

  const [mapStyle, setMapStyle] = useState(MapStyle)

  return (
    <>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle={mapStyle}
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      >
        {/* <Pins data={CITIES} onClick={setPopupInfo} /> */}

        {/* {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <CityInfo info={popupInfo} />
          </Popup>
        )} */}

        {/* <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} /> */}
      </MapGL>

      <ControlPanel />
    </>
  );
}

export default Map;
