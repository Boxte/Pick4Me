import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faKeyboard } from "@fortawesome/free-solid-svg-icons";

import "./TextInput.css";

export const TextInput = (props) => {
  const [text, setText] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleTextSubmit = () => {
    if (!text) {
      setHasError(true);
      return;
    }
    props.handleTextSubmit(text);
  };

  const handleTextChange = (event) => {
    if (event.keyCode === 13) {
      handleTextSubmit();
    }
    const { value } = event.target;
    setText(value);

    if (value) {
      setHasError(false);
    }
  };

  const ErrorMessage = () => {
    return hasError ? (
      <p className="text-input-error-message">Tell Mr. Wit what you feeling</p>
    ) : (
      <p className="text-input-error-message">&nbsp;</p>
    );
  };

  return (
    <div className="text-input-overall-container">
      <div className="text-input-container">
        <FontAwesomeIcon className="text-input-indicator" icon={faKeyboard} />
        <input
          className="text-input-selection"
          placeholder="I'm feeling korean"
          type="text"
          value={text}
          onChange={(event) => handleTextChange(event)}
        />
      </div>
      <ErrorMessage />

      <button className="pick-button" onClick={handleTextSubmit}>
        <span className="pick-button-text">&#129302; Pick</span>
      </button>
    </div>
  );
};
