import React, { useState, useEffect } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import MapButtonBox from "./components/MapButtonBox";

const libraries = ["places"];

export default function Location() {
  const center = { lat: 36.76237104558652, lng: 3.0449045950397653 };

  const [googleMap, setGoogleMap] = useState(
    /** @type google.maps.Map */ (null)
  );

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  return (
    isLoaded && (
      <>
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "85%", height: "50%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => {
            setGoogleMap(map);
          }}
        >
          <Marker position={center} />
        </GoogleMap>
        <MapButtonBox center={center} googleMap={googleMap} />
      </>
    )

    /**/
  );
}
