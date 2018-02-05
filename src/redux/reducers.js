import { combineReducers } from 'redux'
import { DRAW_PIECE, ERASE_PIECE } from './actions.js'
import { widthSize, heightSize } from '../constants.js'
import { forEachBlockInPiece, isPiecePlacable, copyGrid } from '../helpers.js'


/*
** Init array of arrays with all cells as objects.
*/
function initGrid() {
  const grid = [];
  for (let i = 0; i < heightSize; i++) {
    const row = [];
    for (let j = 0; j < widthSize; j++) {
      row.push({
        fill: false,
      })
    }
    grid.push(row);
  }
  return grid
}

/*
** Return new grid with modified cells
*/
function drawPiece(grid, piece) {
  const gridCopy = copyGrid(grid);
  forEachBlockInPiece(piece, (x, y) => {
    let cell = gridCopy[x][y];
    cell.fill = true;
  });
  return gridCopy;
}

/*
** Return new grid with modified cells
*/
function erasePiece(grid, piece) {
  const gridCopy = copyGrid(grid);
  forEachBlockInPiece(piece, (x, y) => {
    let cell = gridCopy[x][y];
    cell.fill = false;
  });
  return gridCopy;
}

/*
** Reducer for grid-related operations.
*/
function grid(state = initGrid(), action) {
  console.log("ici")
  console.log(state);
  switch(action.type) {
    case DRAW_PIECE:
      return drawPiece(state, action.piece);
    case ERASE_PIECE:
      return erasePiece(state, action.piece);
    default:
      return state;
  }
}

/*
** Full app reducer.
*/
const tetrisTree = combineReducers({
  grid,
});

export default tetrisTree;

