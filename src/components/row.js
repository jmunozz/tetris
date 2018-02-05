import React from 'react';
import Cell from './cell.js';


const Row = ({row}) => {

  const rowStyle = {
    display:"flex"
  }
  return <div style={rowStyle}> {
    row.map((e) => {
      return <Cell cell={e}></Cell>
    })
  }</div>
}

export default Row;