import React from "react";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Map from "./Map";
import Geocoder from "./Geocoder";

// Mapbox

const Booking = () => {
  return (
    <section className="booking">
      <div className="booking__container">
        <h2 className="h2 h2--1">PML HOLIDAYS</h2>
      </div>
      <div className="booking__container">
        <div className="booking__pickup">
          <h2 className="h2 ">Pick-up location</h2>
          <Geocoder number={1} />
        </div>

        <div className="booking__dropoff">
          <h2 className="h2 ">Drop-off</h2>
          <Geocoder number={2} />
        </div>

        <button className="booking__button">
          <SearchRoundedIcon />
          <h2 className="h2">Search</h2>
        </button>
      </div>
    </section>
  );
};

export default Booking;
