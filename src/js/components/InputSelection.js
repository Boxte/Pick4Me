import React from "react";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faKeyboard } from "@fortawesome/free-solid-svg-icons";

import "./InputSelection.css";

export const InputSelection = (props) => {
  const { handleSwitch } = props;
  return (
    <div className="internal-input-selection-holder">
      <p className="input-selection-title">Talk to Mr. Wit using...</p>
      <div className="internal-input-selection-options-holder">
        <button
          className={classNames("voice-button", "input-selection-button")}
          onClick={() => handleSwitch(true)}
        >
          <FontAwesomeIcon icon={faMicrophone} />
          <span className="input-selection-button-text">Voice</span>
        </button>
        <button
          className={classNames("text-button", "input-selection-button")}
          onClick={() => handleSwitch(false)}
        >
          <FontAwesomeIcon icon={faKeyboard} />
          <span className="input-selection-button-text">Text</span>
        </button>
      </div>
    </div>
  );
};
