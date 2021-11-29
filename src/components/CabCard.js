import React from "react";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import LuggageIcon from "@mui/icons-material/Luggage";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CabCard = ({ carModel, seats, luggage, price, cabImage }) => {
  return (
    <div className="cab-card">
      <div className="cab-card__image">
        <img src={cabImage} alt="car 1" />
      </div>

      <div className="cab-card__details">
        <h2 className="h2--2">{carModel}</h2>
        <div className="service">
          <div className="service__unit">
            <h3 className="h3 h3--1">1 Unit</h3>
          </div>
          <div className="service__seats">
            <h3 className="h3 h3--1">
              <AirlineSeatReclineNormalIcon /> {seats} Seats
            </h3>
          </div>
          <div className="service__luggage">
            <h3 className="h3 h3--1">
              <LuggageIcon /> {luggage} Luggage bag
            </h3>
          </div>
        </div>
        <div className="tags">
          <div className="tags__safety">
            <h3 className="h3">Safety Standards & Restriction</h3>
          </div>
          <div className="tags__payment">
            <h3 className="h3">Partial Payment</h3>
          </div>
        </div>
        <div className="checkmarks">
          <p className="p p--1">
            <CheckCircleIcon />
            Free cancellation
          </p>
          <p className="p p--1">
            <CheckCircleIcon />
            25 / 7 customer helpline
          </p>
        </div>
      </div>

      <div className="cab-card__price">
        <h2 className="h2--2">₹ {price}</h2>
        <button className="btn btn--orange">Book Now</button>
        <p className="p p--1">All prices include fees & tip</p>
      </div>
    </div>
  );
};

export default CabCard;
