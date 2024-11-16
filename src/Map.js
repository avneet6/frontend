import React from "react";
import GoogleMapReact from 'google-maps-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(Props){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        //defaultCenter={Props.defaultProps.center}
        defaultZoom={Props.defaultProps.zoom}
      >
       
      </GoogleMapReact>
    </div>
  );
}