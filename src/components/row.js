import React from 'react';
import Cell from './cell.js';


const Row = ({row}) => {

  const rowStyle = {
    display:"flex"
  }
  return <div style={rowStyle}> {
    row.map((e, i) => {
      return <Cell key={i} fill={e.fill}></Cell>
    })
  }</div>
}

export default Row;