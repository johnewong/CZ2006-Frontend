//https://www.npmjs.com/package/@react-google-maps/api
//https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d

import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
  LoadScript,
} from "@react-google-maps/api";
import moment from "moment";
<script
  async
  defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9jkyKzO_mrxMwnITwG5q_i5cCG86cAVY&callback=initMap"
  type="text/javascript"
></script>;
{
  /* <script src="http://maps.google.com/maps/api/js"></script>; */
}

const containerStyle = {
  width: "100%",
  height: "100%",
};
interface Data {
  mapList: Array<MapProp>;
}

interface MapProp {
  vet: Vet;
  veterSlot: any;
}

interface Vet {
  vetName: string;
  coordinate: string;
  vetAddress:string;
  tel_office_1:string;
  operatingHourStart:string;
  operatingHourEnd:string;
}

interface Center {
  lat: number;
  lng: number;
}

function MapContainer(data: Data) {
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [map, setMap] = React.useState(null);
  const [center, setCenter] = useState<Center>();
  const [zoom, setZoom] = useState<number>(15);
  const [isReady, setReady] = useState<boolean>(false);
  const [mapList, setMapList] = useState<Array<MapProp>>();
  // useEffect(() => {
  //   getCurrentLocation();
  //   navigator.geolocation.getCurrentPosition(success);
  // }, [center]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })

  const [ currentPosition, setCurrentPosition ] = useState<Center>();
  const success = (position:any) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {
      lat: latitude,
      lng: longitude
    }
    setCurrentPosition(currentPosition);
  }

  const cuurentLocation = [
    {
      name: "Current Location",
      location: center,
      vetAddress:"",
      tel_office_1:"",
      operatingHourStart:"",
      operatingHourEnd:""
    }
  ];
  const [locations, setLocations] = useState(cuurentLocation);

  useEffect(() => {
    // setMapList(data.mapList)
    addLocation(data.mapList);
    setMap(null);
  }, [data]);

 
  function addLocation(list: Array<MapProp>) {
    list.map((item, index) => {
      let lat = Number(item.vet.coordinate.split(",", 2)[0]);
      let lng = Number(item.vet.coordinate.split(",", 2)[1]);
      let startTime = moment(item.vet.operatingHourStart).format('hh:mm');
      let endTime = moment(item.vet.operatingHourEnd).format('hh:mm');
      locations.push({
        name: item.vet.vetName,
        location: { lat: lat, lng: lng },
        vetAddress: item.vet.vetAddress,
        tel_office_1:item.vet.tel_office_1,
        operatingHourStart:startTime,
        operatingHourEnd:endTime,
      });
      // if(index == data.mapList.length-1)   {
      //   setReady(true);
      // }
    });
    setReady(true);
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD9jkyKzO_mrxMwnITwG5q_i5cCG86cAVY",
  });

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
      position:props.location,      
      content:'<div><p>Name:'+props.name+'</p><p>Address:'+props.vetAddress+'</p><p>Tel:'+props.tel_office_1+'</p><p>Operating Hour:'+props.operatingHourStart+'-'+props.operatingHourEnd+'</p></div>'
    });
  }

  function renderLocation() {
    return locations.map((item) => {
      let m = marker(item);
      m.addListener("click", () => {
        let info = openInfowindow(item);
        info.open(map, m);
      });
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


  return isLoaded && isReady? (

    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentPosition!}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}            
    >
      {    
        /* Child components, such as markers, info windows, etc. */
       renderLocation()
      }
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapContainer);

// const MapContainer: React.FC<Data> = (mapProps) => {

// //mapProps.map

//   const [lat, setLat] = useState<number>(0);
//   const [lng, setLng] = useState<number>(0);
//   const [center, setCenter] = useState<Center>();
//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyD9jkyKzO_mrxMwnITwG5q_i5cCG86cAVY",
//   });

//   const marker = (props: any) => {
//     return new window.google.maps.Marker({
//       title: props.name,
//       position: props.location,
//       map,
//     });
//   }

//   function openInfowindow(props: any) {
//     return new window.google.maps.InfoWindow({
//       content: props.name,
//     });
//   }

//   const locations = [
//     {
//       name: "Current Location",
//       location: center,
//     },
//     {
//       name: "Location 1",
//       location: {
//         lat: 41.3954,
//         lng: 2.162,
//       },
//     },
//     {
//       name: "Location 2",
//       location: {
//         lat: 41.3917,
//         lng: 2.1649,
//       },
//     },
//   ];

//   return (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={15}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {
//         locations.map((item) => {
//           let m = marker(item);
//           m.addListener("click", () => {
//             let info = openInfowindow(item);
//             info.open(map, m);
//           });
//         })
//       }

//       <></>
//     </GoogleMap>
//   );
// };
// export default ({mapList}: Data) => (
//   <MapContainer mapList={mapList}>
//   </MapContainer>
// );

// export default  MapContainer;
