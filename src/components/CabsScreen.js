import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";

// Router
import { useNavigate } from "react-router-dom";

// Contes
import { useRideValue } from "../context/rideContext";

// API
import pmlAPI from "../api/pmlAPI";

import CabCard from "./CabCard";

const CabsScreen = () => {
  const [{ pickup, dropoff, date, passengers }] = useRideValue();
  const [cabs, setCabs] = useState([]);
  const navigate = useNavigate();

  const onPageLoad = useCallback(async () => {
    let cabs = await pmlAPI.get(
      `/api/v1/cabs?seats[gte]=${
        passengers.adults + passengers.children + passengers.infants < 4
          ? 4
          : passengers.adults + passengers.children + passengers.infants
      }&sort=seats`
    );
    setCabs(cabs.data.data.data); // TODO: Change in production
    // setCabs(cabs.data.data);
  }, [passengers]);

  useEffect(() => {
    if (!pickup || !date) navigate("/");
    onPageLoad();
  }, [pickup, date, navigate, onPageLoad]);

  const renderCabs = () =>
    cabs.map((cab) => (
      <CabCard
        carModel={cab.carModel}
        seats={cab.seats}
        luggage={cab.luggage}
        price={cab.price}
        cabImage={cab.cabImage}
      />
    ));

  return (
    <div className="cab-screen">
      <div className="cab-grid">
        <div className="ride-info">
          <div className="ride-info__title">
            <h2 className="h2--2">Your transfer</h2>
          </div>
          <div className="ride-info__pickup">
            <h3 className="h3 h3--1">Pick-up location</h3>
            <h3 className="h3">{pickup.place_name}</h3>
          </div>
          {dropoff.place_name && (
            <div className="ride-info__dropoff">
              <h3 className="h3 h3--1">Drop-off location</h3>
              <h3 className="h3">{dropoff.place_name}</h3>
            </div>
          )}
          <div className="ride-info__date">
            <h3 className="h3 h3--1">Pick-up Date & time</h3>
            <h3 className="h3">
              {moment(date).format("MMMM Do YYYY, h:mm a")}
            </h3>
          </div>
          <div className="ride-info__passengers">
            <h3 className="h3 h3--1">Passengers</h3>
            <h3 className="h3">
              {passengers.adults} adt, {passengers.children} chd,{" "}
              {passengers.infants} inf
            </h3>
          </div>
        </div>

        <div className="cab-info">
          <div className="banner">
            <div className="banner__info">
              <div className="banner__img">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/126/126473.png"
                  alt="like"
                />
              </div>
              <div className="banner__text">
                <h3 className="h3">Save up to 30%</h3>
                <p className="p p--2">
                  We will find you the cheapest airport transfers with our
                  verified partners!
                </p>
              </div>
            </div>
            <div className="banner__info">
              <div className="banner__img">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4634/4634905.png"
                  alt="like"
                />
              </div>
              <div className="banner__text">
                <h3 className="h3">Professional drivers</h3>
                <p className="p p--2">
                  Experienced and polite drivers with well-serviced, comfortable
                  cabs.
                </p>
              </div>
            </div>
            <div className="banner__info">
              <div className="banner__img">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/912/912316.png"
                  alt="like"
                />
              </div>
              <div className="banner__text">
                <h3 className="h3">24 / 7 Customer Support</h3>
                <p className="p p--2">
                  We are always available to help you with your transfer
                </p>
              </div>
            </div>
          </div>

          {renderCabs()}
          {cabs.length === 0 && <h1>No cabs found</h1>}
        </div>
      </div>
    </div>
  );
};

export default CabsScreen;
