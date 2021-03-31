//https://www.npmjs.com/package/@react-google-maps/api
//https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d
import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
<script
  async
  defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9jkyKzO_mrxMwnITwG5q_i5cCG86cAVY&callback=initMap"
  type="text/javascript"
></script>;

const containerStyle = {
  width: "100%",
  height: "100%",
};

interface Center {
  lat: number;
  lng: number;
}

function MapContainer(props: any) {
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [center, setCenter] = useState<Center>();

  const locations = [
    {
      name: "aaaaa",
      location: {       
        lat: 1.422,
        lng: 103.762,
      },
    },
    {
      name: "Current Location",
      location: center,
    },
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
  ];

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD9jkyKzO_mrxMwnITwG5q_i5cCG86cAVY",
  });

  const [map, setMap] = React.useState(null);

  useEffect(() => {
    getCurrentLocation();
  }, [center]);

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position: any) => {
      let center: Center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCenter(center);
    });
  }

  function marker(props: any) {
    return new google.maps.Marker({
      title: props.name,
      position: props.location,
      map,
    });
  }

  function openInfowindow(props: any) {
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
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
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
