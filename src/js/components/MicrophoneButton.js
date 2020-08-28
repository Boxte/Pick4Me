import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCircle } from '@fortawesome/free-solid-svg-icons';

import './MicrophoneButton.css';

export const MicrophoneButton = props => {
    const styling = classNames({
        'microphone-button': true,
        'microphone-button-active': props.listening
    });

    return (
        <FontAwesomeIcon 
          className={styling}
          icon={faMicrophone} 
          onClick={props.action}
        />
      );
}