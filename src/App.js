import React, { useState, useEffect, Fragment } from "react";
import _ from "lodash";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import "./App.css";

import {
  getAnswerFrom,
  readAiResponse,
  getRandomRestaurantOption,
  getListOfRestaurants,
} from "../src/js/actions";
import { MicrophoneButton } from "./js/components/MicrophoneButton";
import { InputSelection } from "./js/components/InputSelection";
import { TextInput } from "./js/components/TextInput";
import { RestaurantResult } from "./js/components/RestaurantResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames";

const testJsonObj = {
  id: "jaMCQE8yehS9g0_w2Ns23A",
  alias: "wok-n-roll-henrico-2",
  name: "Wok n Roll",
  image_url:
    "https://s3-media2.fl.yelpcdn.com/bphoto/FwygwZ4mhUXnIOrJjWHI3A/o.jpg",
  is_closed: false,
  url:
    "https://www.yelp.com/biz/wok-n-roll-henrico-2?adjust_creative=AyfAt539G-Dh2_VU_Z12pw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AyfAt539G-Dh2_VU_Z12pw",
  review_count: 20,
  categories: [
    {
      alias: "chinese",
      title: "Chinese",
    },
    {
      alias: "japanese",
      title: "Japanese",
    },
  ],
  rating: 3.5,
  coordinates: {
    latitude: 37.619164,
    longitude: -77.52125,
  },
  transactions: ["delivery"],
  price: "$",
  location: {
    address1: "7514 W Broad St",
    address2: "",
    address3: "",
    city: "Henrico",
    zip_code: "23294",
    country: "US",
    state: "VA",
    display_address: ["7514 W Broad St", "Henrico, VA 23294"],
  },
  phone: "+18044225048",
  display_phone: "(804) 422-5048",
  distance: 4460.9204,
};

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
  const [gettingAnswer, setGettingAnswer] = useState(false);
  const [randomPick, setRandomPick] = useState({});
  const [userUtterance, setUserUtterance] = useState("");
  const [
    isCurrentInputSelectionVoice,
    setIsCurrentInputSelectionVoice,
  ] = useState(true);
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  const startOrStopListening = () => {
    if (!listening) {
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
    }
  };

  const handleSwitch = (val) => {
    setUserUtterance("");
    setRandomPick({});
    setIsCurrentInputSelectionVoice(val);
  };

  const handleTextSubmit = async (text) => {
    setUserUtterance(text);
    await getAnswerFrom(text).then((response) => {
      const details = readAiResponse(response);
      setGettingAnswer(true);
      getListOfRestaurants(details).then((restaurantsJson) => {
        const businesses = restaurantsJson["businesses"];
        const option = getRandomRestaurantOption(businesses);
        setRandomPick(option);
        setGettingAnswer(false);
      });
    });
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="App">
        <p>Browser does not support speech recognition</p>
      </div>
    );
  }

  const content = _.isEmpty(randomPick) ? (
    <div className="input-holder">
      <div className="microphone-holder">
        {isCurrentInputSelectionVoice ? (
          <div>
            <Transcript transcript={transcript} />
            <MicrophoneButton
              action={startOrStopListening}
              listening={listening}
            />
          </div>
        ) : (
          <TextInput handleTextSubmit={handleTextSubmit} />
        )}
      </div>
    </div>
  ) : (
    <div className="input-holder">
      <div className="restaurant-result-holder">
        <p className="utterance">{`\"${userUtterance}\"`}</p>
        <RestaurantResult restaurant={randomPick} />
        <button
          className="redo-button"
          onClick={() => handleTextSubmit(userUtterance)}
        >
          <FontAwesomeIcon icon={faRedoAlt} />
          <span className="input-selection-button-text">
            Let's do that again
          </span>
        </button>
      </div>
    </div>
  );

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
      {content}
      <div className="input-selection-holder">
        <InputSelection handleSwitch={handleSwitch} />
      </div>
      {/* <Dictaphone></Dictaphone> */}
    </div>
  );
}

export default App;
