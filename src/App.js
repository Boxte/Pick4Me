import React, { useState, useEffect, Fragment } from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import "./App.css";

import { getAnswerFrom } from "../src/js/actions";
import { MicrophoneButton } from "./js/components/MicrophoneButton";
import { InputSelection } from "./js/components/InputSelection";
import { TextInput } from "./js/components/TextInput";

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

  const handleTextSubmit = (text) => {
    console.log(`App: ${text}`);
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
        <h1 className="title">Pick4Me</h1>
        <hr className="title-divider" />
        <p className="subtitle">
          I'm too hungry to decide where to eat. Help me Mr. Wit!
        </p>
        <p className="robot-emoji">&#129302;</p>
      </header>
      <div className="input-holder">
        <div className="microphone-holder">
          {/* <Transcript transcript={transcript} />
          <MicrophoneButton
            action={startOrStopListening}
            listening={listening}
          /> */}
          <TextInput handleTextSubmit={handleTextSubmit} />
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
