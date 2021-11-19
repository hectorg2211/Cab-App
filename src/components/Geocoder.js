import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGVjdG9yZzIyMTEiLCJhIjoiY2t0eWtxbmhtMDhwMTJwcG1jZXd0b3VhMSJ9.8XhBErdMP3PqsR-xN-NkMA";

const Geocoder = ({ number, setCoordinates }) => {
  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      country: "in",
    });

    geocoder.addTo(`#geocoder${number}`);
    geocoder.on("result", (e) => {
      console.log(e.result);
      setCoordinates(e.result);
    });
  }, [setCoordinates, number]);

  return <div className="geocoder" id={`geocoder${number}`}></div>;
};

export default Geocoder;
