//https://www.npmjs.com/package/@react-google-maps/api
//https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d
import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9jkyKzO_mrxMwnITwG5q_i5cCG86cAVY&callback=initMap"
  type="text/javascript"
></script>;

const containerStyle = {
  width: "360px",
  height: "400px",
};
const locations = [
  {
    name: "Location 1",
    location: {
      lat: 41.3954,
      lng: 2.162,
    },
  },
  {
    name: "Location 2",
    location: {
      lat: 41.3917,
      lng: 2.1649,
    },
  },
  {
    name: "Location 3",
    location: {
      lat: 41.3773,
      lng: 2.1585,
    },
  },
  {
    name: "Location 4",
    location: {
      lat: 41.3797,
      lng: 2.1682,
    },
  },
  {
    name: "Location 5",
    location: {
      lat: 41.4055,
      lng: 2.1915,
    },
  },
];

const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

let center = {
  lat: 41.3954,
  lng: 2.162,
};

function getCurrentLocation(){

  navigator.geolocation.getCurrentPosition((position: any) => {
    return{
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
  });
}


function MapContainer() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD9jkyKzO_mrxMwnITwG5q_i5cCG86cAVY",
  });

  const [map, setMap] = React.useState(null);

  function marker(props: any) {
    return new google.maps.Marker({
      title: props.name,
      position: props.location,
      map,
    });
  }

  function openInfowindow(props: any) {
    console.log("aa", props);
    return new google.maps.InfoWindow({
      content: props.name,
    });
  }

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount} 
      onRightClick     
    >
      {
        /* Child components, such as markers, info windows, etc. */
        locations.map((item) => {
          let m = marker(item);
          m.addListener("click", () => {
            let info = openInfowindow(item);
            info.open(map, m);
          });
        })
      }

      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapContainer);
