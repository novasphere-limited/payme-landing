import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {useState, useEffect} from "react"

const Map = () => {
    const mapContainerStyle = {
    width: '100%',
    height: '400px',
    };
    
    const [center, setCenter] = useState(null);
    
    useEffect(() => {
        const getUserLocation = () => {
            if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
            const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            };
            setCenter(userLocation);
            });
        }
    };
    getUserLocation();
  }, []);

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        {center && <Marker position={center} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;