import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGVjdG9yZzIyMTEiLCJhIjoiY2t0eWtxbmhtMDhwMTJwcG1jZXd0b3VhMSJ9.8XhBErdMP3PqsR-xN-NkMA";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // Container ID
      style: "mapbox://styles/hectorg2211/ckw47o6zz3eck14qsch4mwwxd", // Style url
      center: [79.27329, 22.137936], // starting position [lng, lat]
      zoom: 4, // starting zoom
    });
  }, []);

  return <div id="map"></div>;
};

export default Map;
