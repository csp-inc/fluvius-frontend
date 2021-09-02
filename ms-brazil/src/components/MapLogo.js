import React from "react";
import mapboxLogo from "../images/mapbox-logo-white.png";

const Logo = () => {
  return (
    <div className="mapboxLogo">
      <img
        src={mapboxLogo}
        width="80"
        alt="Mapbox Logo"
      ></img>
    </div>
  );
};

export default Logo;