import Cell from './cell.js';


const Row = (row) => {

  return <div> {
    row.map((e) => {
      return <div cell={e}></div>
    })
  }</div>
}

export default Row;