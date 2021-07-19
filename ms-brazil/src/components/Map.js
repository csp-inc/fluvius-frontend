import * as React from 'react';
import {useState, useEffect} from 'react';
import MapGL, { Popup, NavigationControl, FullscreenControl, ScaleControl, GeolocateControl} from 'react-map-gl';
import mapboxgl from "mapbox-gl";

//Components
import ControlPanel from './MapControlPanel';
import Pins from './MapPins';
import StationInfo from './Station-info';
import mapStyle from "./MapStyle.json"
// import MapTitle from './MapTitle';

const TOKEN = 'pk.eyJ1Ijoia212YW5uZXN0ZSIsImEiOiJja2puOTkzejEycnJzMnFwZ2hlYWptN3hlIn0.17FCOOngf5KK1Hs8BVmz7Q'; 

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px'
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px'
};

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px'
};

const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 20,
    longitude: -80,
    zoom: 2.45,
    bearing: 0,
    pitch: 0
  });

  const allData = props.allData
  const popupInfo = props.popupInfo
  const setPopupInfo = props.setPopupInfo

  return (
    <>
      <MapGL
        {...viewport}
        width="100%"
        height="650px"
        mapStyle={mapStyle}
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      >
        <Pins data={allData} onClick={setPopupInfo} />

        {popupInfo.longitude && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.Longitude}
            latitude={popupInfo.Latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <StationInfo info={popupInfo.longitude} />
          </Popup>
        )}

        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />

        {/* <MapTitle title={'Map Title (make it station name?)'}/> */}
        <ControlPanel />

      </MapGL>

    </>
  );
}

export default Map;
