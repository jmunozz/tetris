import React from 'react';

import { connect } from 'react-redux';
import { pieces } from '../constants.js';
import { togglePlay, setPiece, drawPiece } from '../redux/actions.js';


let StartDisplay = ({isPlaying, start}) => {
  console.log(isPlaying);
  return <button onClick={start}>{isPlaying ? 'Stop' : 'Start'}</button>
} 

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    start: () => {
      dispatch(togglePlay());
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isPlaying: state.isPlaying,
  }
}

export default StartDisplay = connect(mapStateToProps, mapDispatchToProps)(StartDisplay)