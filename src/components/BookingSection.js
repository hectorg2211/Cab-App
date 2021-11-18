import React, { useState, useEffect } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Map from "./Map";
import Geocoder from "./Geocoder";

// Mapbox

const Booking = () => {
  const [pickup, setPickup] = useState({});
  const [dropoff, setDropoff] = useState({});
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {}, [pickup, dropoff]);

  const toggleMapRender = () => {
    if (Object.keys(pickup).length === 0 || Object.keys(dropoff).length === 0) {
      return;
    }
    setShowMap(true);
  };

  return (
    <section className="booking">
      <div className="booking__container">
        <h2 className="h2 h2--1">PML HOLIDAYS</h2>
      </div>
      <div className="booking__container">
        <div className="booking__pickup">
          <h2 className="h2 ">Pick-up location</h2>
          <Geocoder number={1} setCoordinates={setPickup} />
        </div>

        <div className="booking__dropoff">
          <h2 className="h2 ">Drop-off</h2>
          <Geocoder number={2} setCoordinates={setDropoff} />
        </div>

        <button className="booking__button" onClick={toggleMapRender}>
          <SearchRoundedIcon />
          <h2 className="h2">Search</h2>
        </button>
      </div>

      {showMap && (
        <div className="booking__map">
          <Map
            pickupCoordinates={pickup.center}
            destinationCoordinates={dropoff.center}
          />
        </div>
      )}
    </section>
  );
};

export default Booking;
