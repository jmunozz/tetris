import { combineReducers } from 'redux'
import { DRAW_PIECE, ERASE_PIECE, SET_PIECE, TOGGLE_PLAY } from './actions.js'
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
function grid(state = {grid: initGrid(), currentPiece:null}, action) {
  switch(action.type) {
    case DRAW_PIECE:
      return drawPiece(state, action.piece);
    case ERASE_PIECE:
      return erasePiece(state, action.piece);
    case SET_PIECE:
      return {}
    default:
      return state;
  }
}

/*
** Reducer for manipulating currentPiece
*/

function currentPiece(state = null, action) {
  switch (action.type) {
      return Object.assign({}, action.piece);
    default:
      return state;
  }
}

/*
** Reducer for on/off mode
*/ 

function isPlaying(state = false, action) {
  switch (action.type) {
    case TOGGLE_PLAY:
      return !state;
    default:
      return state;
  }
}


/*
** Full app reducer.
*/
const tetrisTree = combineReducers({
  grid,
  isPlaying,
});

export default tetrisTree;

