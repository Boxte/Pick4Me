import React from "react";

import "./LocationInput.css";

export const LocationInput = (props) => {
  const { handleTextChange } = props;
  return (
    <div className="location-input-container">
      <label className="location-label" htmlFor="location">
        Manually set location:
      </label>
      <input
        className="location-text-input-selection"
        id="location"
        placeholder="zip code or city, state"
        onChange={(event) => handleTextChange(event.target.value)}
        type="text"
      />
    </div>
  );
};
