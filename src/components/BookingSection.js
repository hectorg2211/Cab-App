import React from "react";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import Map from "./Map";

// Mapbox

const Booking = () => {
  return (
    <section className="booking">
      <div className="booking__container">PML HOLIDAYS</div>
      <div className="booking__container">
        <div className="booking__pickup">
          <MyLocationRoundedIcon />
          <h2>Pick-up location</h2>
        </div>
        <div className="booking__dropoff">
          <LocationOnRoundedIcon />
          <h2>Drop-off</h2>
        </div>
      </div>
      <Map />
    </section>
  );
};

export default Booking;
