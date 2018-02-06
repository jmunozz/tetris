import { isPiecePlacable } from '../helpers.js';
import { pieces } from '../constants.js';

export const DRAW_PIECE = 'DRAW_PIECE';
export const ERASE_PIECE = 'ERASE_PIECE';
export const SET_PIECE = 'SET_PIECE';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const SET_NEW_PIECE = 'SET_NEW_PIECE';

export function drawPiece() {
  return { type: DRAW_PIECE };
}

export function erasePiece() {
  return { type: ERASE_PIECE };
}

export function setPiece(piece) {
  return { type: SET_PIECE, piece: piece };
}

export function setNewPiece() {
  return { type: SET_NEW_PIECE};
} 

export function togglePlay() {
  return (dispatch, getState) => {
    dispatch({type: TOGGLE_PLAY});
    tetris(dispatch, getState);
  }
}

function tetris(dispatch, getState) {

  const state = getState();
  let currentPiece = state.tetris.currentPiece;

  // If no currentPiece set. We set and draw one.
  if (!currentPiece) {
    dispatch(setNewPiece())
    dispatch(drawPiece());
  }
  setTimeout(()=> {
    drop(dispatch, getState);
  }, 1000); 


}




function drop(dispatch, getState) {

  const state = getState();
  const currentPiece = state.tetris.currentPiece;
  const nextPiece = Object.assign(
    {}, 
    currentPiece, 
    { x: currentPiece.x + 1 }
  );
  const grid = state.tetris.grid;
  const isPlaying = state.isPlaying;
  
  if (!isPlaying) return;
  

  // Erase currentPiece
  dispatch(erasePiece());
  const isCurrentPiecePlacable = isPiecePlacable(nextPiece, grid); 
  // Drop currentPiece from one x to the bottom
  if (isCurrentPiecePlacable) {
    dispatch(setPiece(nextPiece)); 
    dispatch(drawPiece());
    setTimeout(() => {
      drop(dispatch, getState);
    }, 1000);
  // Definitely draw piece on the grid.
  } else {
    dispatch(drawPiece());
  }
}