import React, { useState, useEffect } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Map from "./Map";
import Geocoder from "./Geocoder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

// Date picking
import MomentUtils from "@date-io/moment";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

// Radio buttons
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// API
import pmlAPI from "../api/pmlAPI";

const Booking = () => {
  const [pickup, setPickup] = useState({});
  const [dropoff, setDropoff] = useState({});
  const [showMap, setShowMap] = useState(false);
  const [selectedOption, setselectedOption] = useState(2);
  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleSearchClick = async () => {
    toggleMapRender();
    // Create a new ride document
    let document = await pmlAPI.post("/api/v1/rides", {
      from: `${pickup.place_name}`,
      to: `${dropoff.place_name}`,
      distance: `${distance}`,
      coordinates: {
        from: pickup.center,
        to: dropoff.center,
      },
      date: new Date(),
    });
    console.log(document);
  };

  useEffect(() => {
    // console.log(pickup.place_name);
    if (Object.keys(pickup).length !== 0 && Object.keys(dropoff).length !== 0) {
      fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickup.center[0]},${pickup.center[1]};${dropoff.center[0]},${dropoff.center[1]}?access_token=pk.eyJ1IjoiaGVjdG9yZzIyMTEiLCJhIjoiY2t0eWtxbmhtMDhwMTJwcG1jZXd0b3VhMSJ9.8XhBErdMP3PqsR-xN-NkMA`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.routes) {
            setDuration(data.routes[0]?.duration);
            setDistance(data.routes[0]?.distance);
          }
        });
    }
  }, [pickup, dropoff]);

  const toggleMapRender = () => {
    if (Object.keys(pickup).length === 0 || Object.keys(dropoff).length === 0) {
      return;
    }
    setShowMap(true);
  };

  console.log(selectedDate);

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

      <div className="booking__container">
        {selectedOption === 1 && (
          <FormControl component="fieldset">
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel
                value="airport-pickup"
                control={<Radio />}
                label="Airpot Pick-up"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="airport-drop"
                control={<Radio />}
                label="Airport Drop"
              />
            </RadioGroup>
          </FormControl>
        )}
      </div>

      <div className="booking__container ">
        <div className="booking__pickup">
          <h2 className="h2 ">Pick-up location</h2>
          <Geocoder number={1} setCoordinates={setPickup} />
        </div>

        {selectedOption !== 3 && (
          <div className="booking__dropoff">
            <h2 className="h2 ">Drop-off</h2>
            <Geocoder number={2} setCoordinates={setDropoff} />
          </div>
        )}

        <div className="booking__date">
          <h2 className="h2 ">Pick-up Date & Time</h2>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DateTimePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
        </div>

        <button className="booking__button" onClick={handleSearchClick}>
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

          <div className="cards ">
            <div className="cards__top">
              <div className="cards__from">
                <h3 className="h3">From:</h3>
                <p className="p p--1">{pickup.place_name}</p>
              </div>
              <div className="cards__to">
                <h3 className="h3">To:</h3>
                <p className="p p--1">{dropoff.place_name}</p>
              </div>
            </div>

            <div className="cards__bottom">
              <div className="cards__duration">
                <h3 className="h3">Duration:</h3>
                <p className="p p--1">{Math.trunc(duration / 60)} Minutes</p>
              </div>
              <div className="cards__distance">
                <h3 className="h3">Distance:</h3>
                <p className="p p--1">{Math.trunc(distance * 0.001)} KM</p>
              </div>
              <div className="cards__bookmark">
                <BookmarkBorderIcon />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Booking;
