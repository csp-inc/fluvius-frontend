import * as React from 'react';
import MapGL, { Popup, NavigationControl, FullscreenControl, ScaleControl, GeolocateControl} from 'react-map-gl';
import mapboxgl from "mapbox-gl";
import axios from 'axios';

//Components
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
  const allData = props.allData
  const popupInfo = props.popupInfo
  const setPopupInfo = props.setPopupInfo
  const setSelectValue = props.setSelectValue
  const viewport = props.viewport
  const setViewport = props.setViewport
  const [tiles, setTiles]= React.useState([])

  const onSelectStation = props.onSelectStation

  React.useEffect(() => {
    axios.get('http://dev.virtualearth.net/REST/V1/Imagery/Metadata/Aerial?output=json&include=ImageryProviders&key=AlYwW4NFHWBCGkGWAQ3qeuTv6ry7Dge7um3o9cKEu56Hio2DYkZFtbIqrxRR8l9l')
    .then(res=> {
	let bingLoc = res.data.resourceSets[0].resources[0].imageUrl;
	let bingSubdomains = res.data.resourceSets[0].resources[0].imageUrlSubdomains;
	if (bingLoc && bingSubdomains) {
	setTiles(bingSubdomains.map(
		sd => (bingLoc.replace('{subdomain}', sd))
	));
	}
    })
    .catch(err => {
        console.log(err);
    })
}, [])

  if (tiles) {
    mapStyle.sources['mapbox://mapbox.satellite'].tiles = tiles;
    console.log(mapStyle.sources['mapbox://mapbox.satellite'].tiles);
  }
  return (
    <>
      {mapStyle.sources['mapbox://mapbox.satellite'].tiles[0] ?
      <MapGL
        {...viewport}
        width="100%"
        height="575px"
        mapStyle={mapStyle}
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      >
        <Pins data={allData} onClick={setPopupInfo} onChange={setSelectValue} onSelectStation={onSelectStation} />

        {popupInfo.Longitude && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.Longitude}
            latitude={popupInfo.Latitude}
            closeButton={false}
            closeOnClick={false}
            onOpen={setPopupInfo}
          >
            <StationInfo info={popupInfo.site_name} />
          </Popup>
        )}

        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />

      </MapGL> : null }

    </>
  );
}

export default Map;
