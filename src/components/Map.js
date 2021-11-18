import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGVjdG9yZzIyMTEiLCJhIjoiY2t0eWtxbmhtMDhwMTJwcG1jZXd0b3VhMSJ9.8XhBErdMP3PqsR-xN-NkMA";

const Map = () => {
  useEffect(() => {
    // const map = new mapboxgl.Map({
    //   container: "map", // Container ID
    //   style: "mapbox://styles/hectorg2211/ckw47o6zz3eck14qsch4mwwxd", // Style url
    //   center: [-74.5, 40], // starting position [lng, lat]
    //   zoom: 9, // starting zoom
    // });

    // Add the control to the map.
    const geocoder1 = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });
    const geocoder2 = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    geocoder1.addTo("#geocoder1");
    geocoder2.addTo("#geocoder2");
  }, []);

  return (
    <div id="geocoders">
      <div id="geocoder1"></div>
      <div id="geocoder2"></div>
    </div>
  );
};

export default Map;
