import React from "react";

const Why = () => {
  return (
    <section className="why">
      <div className="why__container">
        <h2 className="h2 h2--2 mt-big">
          Why <span>PML Holidays</span> for Cab Booking?
        </h2>
      </div>
      <div className="why__container">
        <div className="why__item">
          <div className="img">
            <img src="./assets/car.png" alt="car logo" />
          </div>
          <h3 className="h3 h3--1">Extensive Options</h3>
          <p className="p p--1">
            Wide range of quality, safe & licensed vehicles
          </p>
        </div>
        <div className="why__item">
          <div className="img">
            <img src="./assets/hand.png" alt="car logo" />
          </div>
          <h3 className="h3 h-3-1">Convenient</h3>
          <p className="p p--1">
            Enjoy a high-quality transfer experience at surprisingly low prices
          </p>
        </div>
        <div className="why__item">
          <div className="img">
            <img src="./assets/turn.png" alt="car logo" />
          </div>
          <h3 className="h3 h-3-1">Easy & flexible booking</h3>
          <p className="p p--1">
            Booking online is easy and only take 5 minutes, cancellations are
            free of charge up to 24 hours before the transfer.
          </p>
        </div>
        <div className="why__item">
          <div className="img">
            <img src="./assets/availability.png" alt="car logo" />
          </div>
          <h3 className="h3 h-3-1">24 / 7 customer service</h3>
          <p className="p p--1">
            Our office is staffed 24 hours a day, 365 days a year- we're always
            here to help you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;