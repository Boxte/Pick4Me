import React, { useState, useEffect } from "react";
import logo from "./logo.svg";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import "./App.css";

import { getAnswerFrom } from "../src/js/actions";
import { MicrophoneButton } from "./js/components/MicrophoneButton";

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
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MicrophoneButton action={startOrStopListening} listening={listening} />
        <p>{transcript}</p>
      </header>
      {/* <Dictaphone></Dictaphone> */}
    </div>
  );
}

export default App;
