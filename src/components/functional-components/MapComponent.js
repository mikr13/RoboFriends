import React from "react";
import GoogleMapReact from "google-map-react";
import MarkerComponent from "./MarkerComponent";
const MAP_KEY = process.env.REACT_APP_GMAP_KEY;

let currentlat, currentlng;

const showPosition = position => {
  currentlat = position.coords.latitude;
  currentlng = position.coords.longitude;
};

const showError = error => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    default:
      alert("An unknown error occurred.");
      break;
  }
};

(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
})();

const SimpleMap = ({ match }) => {
  let lat = parseInt(match.params.lat, 10),
    lng = parseInt(match.params.lng, 10),
    username = match.params.username;

  const createMapOptions = maps => {
    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    return {
      zoom: 10,
      zoomControlOptions: {
        style: maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds: ['roadmap', 'terrain']
      },
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
      },
      mapTypeControl: true
    };
  };

  return (
    <div style={{ height: "50vh", width: "80%", margin: "0 auto" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_KEY }}
        defaultCenter={[lat, lng]}
        defaultZoom={3}
        options={createMapOptions}
      >
        <MarkerComponent lat={currentlat} lng={currentlng} text={`You're here`} />
        <MarkerComponent lat={lat} lng={lng} text={username} />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
