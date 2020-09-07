import React from "react";

import "./PickButton.css";

export const PickButton = (props) => {
  const { handleSubmit } = props;
  return (
    <button className="pick-button" onClick={handleSubmit}>
      <span className="pick-button-text">&#129302; Pick</span>
    </button>
  );
};
