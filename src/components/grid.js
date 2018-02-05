import React from 'react';
import Row from './row.js';

const Grid = ({grid}) => {

  return <div>{
    grid.map((e) => {
      return <Row row={e} />
    })
  }</div>
}

export default Grid;