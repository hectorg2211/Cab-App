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

// Dropdown
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";

// API
import pmlAPI from "../api/pmlAPI";

// Context
import { useRideValue } from "../context/rideContext";

const Booking = () => {
  const [{ pickup, dropoff, distance, duration, passengers, date }, dispatch] =
    useRideValue();

  console.log(pickup, dropoff, distance, duration, passengers, date);
  const [selectedOption, setselectedOption] = useState(2);
  const [airportAction, setAirportAction] = useState("");
  const [open, setOpen] = React.useState(false);
  // const [showMap, setShowMap] = useState(false);

  const handleSearchClick = async () => {
    // toggleMapRender();
    // Create a new ride document
    // let document = await pmlAPI.post("/api/v1/rides", {
    //   from: `${pickup.place_name}`,
    //   to: `${dropoff.place_name}`,
    //   distance: `${distance}`,
    //   coordinates: {
    //     from: pickup.center,
    //     to: dropoff.center,
    //   },
    //   date: new Date(),
    // });
    // console.log(document);
  };

  const handleAirportActionRadio = (event) => {
    setAirportAction(event.target.value);
  };

  // Radio buttons
  const controlProps = (item) => ({
    checked: airportAction === item,
    onChange: handleAirportActionRadio,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  // Dropdown
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  const styles = {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    p: 2,
    bgcolor: "background.paper",
    borderRadius: "3px",
    width: "300px",
  };

  /* Get the duration of the ride and store it in context */
  useEffect(() => {
    if (Object.keys(pickup).length !== 0 && Object.keys(dropoff).length !== 0) {
      fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickup.center[0]},${pickup.center[1]};${dropoff.center[0]},${dropoff.center[1]}?access_token=pk.eyJ1IjoiaGVjdG9yZzIyMTEiLCJhIjoiY2t0eWtxbmhtMDhwMTJwcG1jZXd0b3VhMSJ9.8XhBErdMP3PqsR-xN-NkMA`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.routes) {
            console.log(data.routes[0].duration);
            dispatch({
              type: "ADD_DURATION",
              duration: data.routes[0]?.duration,
            });
            dispatch({
              type: "ADD_DISTANCE",
              distance: data.routes[0]?.distance,
            });
          }
        });
    }
  }, [dispatch, pickup, dropoff]);

  // const toggleMapRender = () => {
  //   if (Object.keys(pickup).length === 0 || Object.keys(dropoff).length === 0) {
  //     return;
  //   }
  //   setShowMap(true);
  // };

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
            <RadioGroup
              row
              aria-label="gender"
              name="row-radio-buttons-group"
              value={airportAction}
              onChange={handleAirportActionRadio}
            >
              <FormControlLabel
                value="airport-pickup"
                control={
                  <Radio
                    {...controlProps("airport-pickup")}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 20,
                      },
                      color: "white",
                      "&.Mui-checked": {
                        color: "white",
                      },
                    }}
                  />
                }
                label="Airport Pick-up"
              />

              <FormControlLabel
                value="airport-drop"
                control={
                  <Radio
                    {...controlProps("airport-drop")}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 20,
                      },
                      color: "white",
                      "&.Mui-checked": {
                        color: "white",
                      },
                    }}
                  />
                }
                label="Airport Drop"
              />
            </RadioGroup>
          </FormControl>
        )}
      </div>

      <div className="booking__container ">
        <div className="booking__pickup">
          <h2 className="h2 ">Pick-up location</h2>
          <Geocoder number={1} />
        </div>

        {selectedOption !== 3 && (
          <div className="booking__dropoff">
            <h2 className="h2 ">Drop-off</h2>
            <Geocoder number={2} />
          </div>
        )}

        <div className="booking__date">
          <h2 className="h2 ">Pick-up Date & Time</h2>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DateTimePicker
              // value={date}
              onChange={(e) => dispatch({ type: "ADD_DATE", date: e })}
            />
          </MuiPickersUtilsProvider>
        </div>

        <div className="booking__passengers">
          <h2 className="h2 ">Passengers</h2>
          <div className="passenger-counter">
            <ClickAwayListener onClickAway={handleClickAway}>
              <Box sx={{ position: "relative" }}>
                <button
                  type="button"
                  className="passenger-btn"
                  onClick={handleClick}
                >
                  <h2 className="h2">
                    {" "}
                    {passengers.adults} adt, {passengers.children} chd,
                    {passengers.infants} inf
                  </h2>
                </button>
                {open ? (
                  <Box sx={styles} className="passenger-dropdown">
                    <div className="passenger-dropdown__row">
                      <div className="passenger-dropdown__left">
                        <h2 className="h2">Adult</h2>
                        <h3 className="h3 ">12+yrs</h3>
                      </div>
                      <div className="passenger-dropdown__right">
                        <button
                          className="minus"
                          onClick={() => {
                            if (passengers.adults === 0) return;
                            dispatch({
                              type: "SUBTRACT_PASSENGERS_ADULTS",
                              passengers,
                            });
                          }}
                        >
                          -
                        </button>
                        <h3 className="h3 h3--1">{passengers.adults}</h3>
                        <button
                          className="plus"
                          onClick={() => {
                            dispatch({
                              type: "ADD_PASSENGERS_ADULTS",
                              passengers,
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="passenger-dropdown__row">
                      <div className="passenger-dropdown__left">
                        <h2 className="h2">Children</h2>
                        <h3 className="h3 ">(2+12yrs)</h3>
                      </div>
                      <div className="passenger-dropdown__right">
                        <button
                          className="minus"
                          onClick={() => {
                            if (passengers.children === 0) return;
                            dispatch({
                              type: "SUBTRACT_PASSENGERS_CHILDREN",
                              passengers,
                            });
                          }}
                        >
                          -
                        </button>
                        <h3 className="h3 h3--1">{passengers.children}</h3>
                        <button
                          className="plus"
                          onClick={() => {
                            dispatch({
                              type: "ADD_PASSENGERS_CHILDREN",
                              passengers,
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="passenger-dropdown__row">
                      <div className="passenger-dropdown__left">
                        <h2 className="h2">Infants</h2>
                        <h3 className="h3 ">(below 2 yrs)</h3>
                      </div>
                      <div className="passenger-dropdown__right">
                        <button
                          className="minus"
                          onClick={() => {
                            if (passengers.infants === 0) return;
                            dispatch({
                              type: "SUBTRACT_PASSENGERS_INFANTS",
                              passengers,
                            });
                          }}
                        >
                          -
                        </button>
                        <h3 className="h3 h3--1">{passengers.infants}</h3>
                        <button
                          className="plus"
                          onClick={() => {
                            dispatch({
                              type: "ADD_PASSENGERS_INFANTS",
                              passengers,
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </Box>
                ) : null}
              </Box>
            </ClickAwayListener>
          </div>
        </div>

        <button className="booking__button" onClick={handleSearchClick}>
          <SearchRoundedIcon />
          <h2 className="h2">Search</h2>
        </button>
      </div>

      {/* {showMap && (
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
      )} */}
    </section>
  );
};

export default Booking;
