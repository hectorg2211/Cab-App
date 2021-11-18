import React, { useState, useEffect } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Map from "./Map";
import Geocoder from "./Geocoder";

// Mapbox

const Booking = () => {
  const [pickup, setPickup] = useState({});
  const [dropoff, setDropoff] = useState({});
  const [showMap, setShowMap] = useState(false);
  const [selectedOption, setselectedOption] = useState(2);

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
        <p
          className={`p p--1 ${selectedOption === 1 ? "active" : ""}`}
          onClick={() => setselectedOption(1)}
        >
          Aiport Transfer
        </p>
        <p
          className={`p p--1 ${selectedOption === 2 ? "active" : ""}`}
          onClick={() => setselectedOption(2)}
        >
          Outstation/Other
        </p>
        <p
          className={`p p--1 ${selectedOption === 3 ? "active" : ""}`}
          onClick={() => setselectedOption(3)}
        >
          Hourly
        </p>
      </div>

      <div className="booking__container ">
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
        <>
          <div className="booking__map">
            <Map
              pickupCoordinates={pickup.center}
              destinationCoordinates={dropoff.center}
            />
          </div>

          <div className="cards mt-big">
            <div className="cards__top">
              <div className="cards__from">From</div>
              <div className="cards__to">To</div>
            </div>

            <div className="cards__bottom">
              <div className="cards__duration">Duration</div>
              <div className="cards__bookmark">Bookmark</div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Booking;
