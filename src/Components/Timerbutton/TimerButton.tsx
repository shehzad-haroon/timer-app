import React from 'react';
import './TimerButton.css'
import PropTypes from 'prop-types';
const TimerButton = ({ buttonAction, buttonValue }:any) => (
  <div className="button-container" onClick={() => buttonAction()}>
    <button  className="button-value" color="primary">
      {buttonValue}
    </button>
  </div>
)
TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
}

export default TimerButton;