import { combineReducers } from "redux";
import {
  DRAW_PIECE,
  ERASE_PIECE,
  SET_PIECE,
  TOGGLE_PLAY,
  SET_NEW_PIECE,
  REFRESH_GRID_WITHOUT_CURRENT,
  INCREASE_SPEED
} from "./actions.js";
import { forEachBlockInPiece, isPiecePlacable, copyGrid } from "../helpers.js";
import initTetris from "./init.js";
import { initBag } from "./init.js";

/*
** Return entire state with new grid.
*/
function drawPiece(state) {
  const grid = state.grid;
  const currentPiece = state.currentPiece;

  const gridCopy = copyGrid(grid);
  forEachBlockInPiece(currentPiece, (x, y) => {
    let cell = gridCopy[x][y];
    cell.fill = true;
    cell.color = currentPiece.t.color;
  });
  return Object.assign({}, state, { grid: gridCopy });
}

/*
** Return entire state with new grid.
*/
function erasePiece(state) {
  const grid = state.grid;
  const currentPiece = state.currentPiece;

  const gridCopy = copyGrid(grid);
  forEachBlockInPiece(currentPiece, (x, y) => {
    let cell = gridCopy[x][y];
    cell.fill = false;
  });
  return Object.assign({}, state, { grid: gridCopy });
}

/*
** Return entire state with new current piece.
*/
function setPiece(state, piece) {
  return Object.assign(state, { currentPiece: piece });
}

/*
** Return entire state with new current piece got from bag and new bag.
*/
function setNewPiece(state) {
  const currentBag = state.bag.length ? state.bag : initBag();
  const indexPiece = getRandomPieceFromBag(currentBag);
  const piece = {
    t: currentBag[indexPiece],
    dir: 0,
    x: 0,
    y: 0
  };
  const nextBag = sliceBagFromIndex(currentBag, indexPiece);
  return Object.assign(state, { currentPiece: piece, bag: nextBag });
}

/*
** Return entire state with new grid without current piece
*/
function refreshGridWithoutCurrent(state) {
  return Object.assign(state, { gridWithoutCurrent: copyGrid(state.grid) });
}

/*
** Return entire state with increased speed.
*/
function increaseSpeed(state) {
  return Object.assign(state, { speed: state.speed + 100 });
}

/*
** Reducer for tetris-related operations.
*/
function tetris(state = initTetris(), action) {
  switch (action.type) {
    case DRAW_PIECE:
      return drawPiece(state);
    case ERASE_PIECE:
      return erasePiece(state);
    case SET_PIECE:
      return setPiece(state, action.piece);
    case SET_NEW_PIECE:
      return setNewPiece(state);
    case REFRESH_GRID_WITHOUT_CURRENT:
      return refreshGridWithoutCurrent(state);
    case INCREASE_SPEED:
      return increaseSpeed(state);
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
  tetris,
  isPlaying
});

export default tetrisTree;

function getRandomPieceFromBag(bag) {
  return Math.floor(Math.random() * bag.length);
}

function sliceBagFromIndex(bag, index) {
  if (bag.length === 1) return [];
  return [...bag.slice(0, index), ...bag.slice(index + 1)];
}
