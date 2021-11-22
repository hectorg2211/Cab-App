import React from "react";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import LuggageIcon from "@mui/icons-material/Luggage";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CabsScreen = () => {
  return (
    <div className="cab-screen">
      <div className="cab-grid">
        <div className="ride-info">
          <div className="ride-info__title">
            <h2 className="h2--2">Your transfer</h2>
          </div>
          <div className="ride-info__pickup">
            <h3 className="h3 h3--1">Pick-up location</h3>
            <h3 className="h3">Delhi, Delhi, India</h3>
          </div>
          <div className="ride-info__dropoff">
            <h3 className="h3 h3--1">Drop-off location</h3>
            <h3 className="h3">Chandigarh, Chandigarh, 160014, India</h3>
          </div>
          <div className="ride-info__date">
            <h3 className="h3 h3--1">Pick-up Date & time</h3>
            <h3 className="h3">Tuesday, 23 November, 2021 2:13 AM</h3>
          </div>
          <div className="ride-info__passengers">
            <h3 className="h3 h3--1">Passengers</h3>
            <h3 className="h3">4 adt, 0 chd, 0 inf</h3>
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
                  src="https://cdn-icons.flaticon.com/png/512/2048/premium/2048781.png?token=exp=1637548764~hmac=68cc51e83010bf951930c4989160afc1"
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

          <div className="cab-card">
            <div className="cab-card__image">
              <img
                src="https://transfer.easemytrip.com/assets/img/wagonr.png"
                alt="car 1"
              />
            </div>

            <div className="cab-card__details">
              <h2 className="h2--2">
                Indica, Swift, Alto, Ford Figo Or Equivalent CNG
              </h2>
              <div className="service">
                <div className="service__unit">
                  <h3 className="h3 h3--1">1 Unit</h3>
                </div>
                <div className="service__seats">
                  <h3 className="h3 h3--1">
                    <AirlineSeatReclineNormalIcon /> 4 Seats
                  </h3>
                </div>
                <div className="service__luggage">
                  <h3 className="h3 h3--1">
                    {" "}
                    <LuggageIcon /> 1 Luggage bag
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
              <h2 className="h2--2">₹ 3253</h2>
              <button className="btn btn--orange">Book Now</button>
              <p className="p p--1">All prices include fees & tip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabsScreen;
