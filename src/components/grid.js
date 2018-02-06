import React from 'react';
import Row from './row.js';
import { drawPiece, togglePlay } from '../redux/actions.js';
import { drop } from '../helpers.js';

const Grid = ({grid, currentPiece, isPlaying, dispatch}) => {
  console.log("render");
  return <div>{
    grid.map((e, i) => {
      return <Row key={i} row={e} />
    })
  }</div>
}

export default Grid;