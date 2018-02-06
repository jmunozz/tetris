import React from 'react';
import Row from './row.js';
import { setPiece } from '../redux/actions.js';

const Grid = ({grid, isPlaying}) => {

  if (isPlaying) {
    dispatch(drawPiece());
  }

  return <div>{
    grid.map((e) => {
      return <Row row={e} />
    })
  }</div>
}

export default Grid;