import React from "react";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faKeyboard } from "@fortawesome/free-solid-svg-icons";

import "./InputSelection.css";

export const InputSelection = (props) => {
  return (
    <div className="internal-input-selection-holder">
      <button className={classNames("voice-button", "input-selection-button")}>
        <FontAwesomeIcon icon={faMicrophone} />
        <span className="input-selection-button-text">Voice</span>
      </button>
      <button className={classNames("text-button", "input-selection-button")}>
        <FontAwesomeIcon icon={faKeyboard} />
        <span className="input-selection-button-text">Text</span>
      </button>
    </div>
  );
};
