import React, { useState } from "react";
import pmlAPI from "../api/pmlAPI";

const CabCreationForm = ({ setCabCreation }) => {
  const [carModel, setCarModel] = useState("");
  const [luggage, setLuggage] = useState(0);
  const [seats, setSeats] = useState(0);
  const [price, setPrice] = useState(0);
  const [cabImage, setCabImage] = useState("");

  const handleCabFormSubmit = async (e) => {
    e.preventDefault();
    await pmlAPI.post(`/api/v1/cabs`, {
      carModel,
      luggage,
      seats,
      price,
      cabImage,
    });

    setCabCreation(false);
  };

  return (
    <form className="cab-form" onSubmit={handleCabFormSubmit}>
      <div className="cab-form__container">
        <div className="cab-form__input">
          <label htmlFor="carModel">
            <p className="p p--1">Car Model</p>
          </label>
          <input
            type="text"
            id="carModel"
            placeholder="Car model..."
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
          />
        </div>
      </div>

      <div className="cab-form__container">
        <div className="cab-form__input">
          <label htmlFor="carLuggage">
            <p className="p p--1">Luggage space</p>
          </label>
          <input
            type="number"
            id="carLuggage"
            min="0"
            value={luggage}
            onChange={(e) => setLuggage(e.target.value)}
          />
        </div>

        <div className="cab-form__input">
          <label htmlFor="carSeats">
            <p className="p p--1">Available seats</p>
          </label>
          <input
            type="number"
            id="carSeats"
            min="0"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
          />
        </div>

        <div className="cab-form__input">
          <label htmlFor="price">
            <p className="p p--1">Price per hour</p>
          </label>
          <input
            type="number"
            id="price"
            step="any"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="cab-form__container">
        <div className="cab-form__input">
          <label htmlFor="carImage">
            <p className="p p--1">Car image URL</p>
          </label>
          <input
            type="text"
            id="carImage"
            placeholder="Car image..."
            value={cabImage}
            onChange={(e) => setCabImage(e.target.value)}
          />
        </div>
      </div>

      <button className="btn btn--2" type="submit">
        Add Cab
      </button>
    </form>
  );
};

export default CabCreationForm;
