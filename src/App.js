import React, { useState, useEffect, Fragment } from "react";
import logo from "./logo.svg";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import "./App.css";

import { getAnswerFrom } from "../src/js/actions";
import { MicrophoneButton } from "./js/components/MicrophoneButton";
import { InputSelection } from "./js/components/InputSelection";

const Dictaphone = () => {
  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      {/* <button onClick={resetTranscript}>Reset</button> */}
      <button onClick={() => getAnswerFrom("I want chinese")}>Call</button>
    </div>
  );
};

const Transcript = (props) => {
  return props.transcript ? (
    <p className="transcript">{props.transcript}</p>
  ) : (
    <p className="transcript">&nbsp;</p>
  );
};

function App() {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  const startOrStopListening = () => {
    if (!listening) {
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
    }
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="App">
        <p>Browser does not support speech recognition</p>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Pick4Me</p>
      </header>
      <div className="input-holder">
        <div className="microphone-holder">
          <Transcript transcript={transcript} />
          <MicrophoneButton
            action={startOrStopListening}
            listening={listening}
          />
        </div>
      </div>
      <div className="input-selection-holder">
        <InputSelection />
      </div>
      {/* <Dictaphone></Dictaphone> */}
    </div>
  );
}

export default App;
