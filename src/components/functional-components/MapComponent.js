import React from "react";
import GoogleMapReact from "google-map-react";

const SimpleMap = ({ match }) => {
  let lat = parseInt(match.params.lat, 10),
    lng = parseInt(match.params.lng, 10),
    username = match.params.username;

  const K_WIDTH = 40;
  const K_HEIGHT = 40;

  const greatPlaceStyle = {
    position: "absolute",
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,

    border: "5px solid #f44336",
    borderRadius: K_HEIGHT,
    backgroundColor: "white",
    textAlign: "center",
    color: "#3f51b5",
    fontSize: 16,
    fontWeight: "bold",
    padding: 4
  };

  const createMapOptions = maps => {
    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    return {
      zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_CENTER,
        style: maps.ZoomControlStyle.SMALL
      },
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
      },
      mapTypeControl: true
    };
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "80%", margin: "0 auto" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCLpofQRbTiLmgAg3jiBIrtNlrIkAGi8jE" }}
        defaultCenter={[lat, lng]}
        defaultZoom={3}
        options={createMapOptions}
      >
        <div style={greatPlaceStyle}>{username}</div>
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
