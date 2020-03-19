import React from 'react';
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const MapContainer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD7ZIdLTcp9ECQHsWr09nipuyWGxjOx964&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `650px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
)(props =>
  <GoogleMap
    defaultZoom={props.isList ? 4 : 15}
    // defaultCenter={new window.google.maps.LatLng(props.places[0].position.lat, props.places[0].position.lng)}>
    defaultCenter={new window.google.maps.LatLng(props.isList ? props.avgCoord.avgLat: props.places[0].position.lat, props.isList ? props.avgCoord.avgLng: props.places[0].position.lng)}>

    {props.places.map(place => (
      <Marker
        key={`marker-${place.name}`}
        title={place.title}
        name={place.name}
        position={place.position}
        onClick={props.onToggleOpen}
      >
        {props.isOpen &&
          <InfoWindow
            key={`infowindow-${place.name}`}
            visible={true}
            onCloseClick={props.onToggleOpen}
          >
            <div>{place.title}</div>
          </InfoWindow>}
      </Marker>
    ))}

  </GoogleMap>
);



export default MapContainer;