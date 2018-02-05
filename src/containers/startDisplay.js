import React from 'react';

import { connect } from 'react-redux';
import { pieces } from '../constants.js';
import { togglePlay, setPiece } from '../redux/actions.js';


let StartDisplay = ({start}) => {
  return <button onClick={start}>Start</button>
} 

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    start: () => {
      dispatch(togglePlay());
      dispatch(setPiece(pieces.i));
    }
  }
}

export default StartDisplay = connect(null, mapDispatchToProps)(StartDisplay)