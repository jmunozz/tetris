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
      dispatch(setPiece({
        x:0, 
        y:0,
        t:pieces.i,
        dir:0,
      }));
    }
  }
}

export default StartDisplay = connect(null, mapDispatchToProps)(StartDisplay)