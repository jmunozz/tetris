import React from 'react';
import Row from './row.js';
import { drawPiece } from '../redux/actions.js';

const Grid = ({grid, isPlaying}) => {

  if(isPlaying)
    dispatch(drawPiece());

  return <div>{
    grid.map((e, i) => {
      return <Row key={i} row={e} />
    })
  }</div>
}

export default Grid;