export const DRAW_PIECE = 'DRAW_PIECE';
export const ERASE_PIECE = 'ERASE_PIECE';
export const SET_PIECE = 'SET_PIECE';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';

export function drawPiece(x, y, t, dir) {
  return { type: DRAW_PIECE, piece: { x, y, t, dir } };
}

export function erasePiece(x, y, t, dir) {
  return { type: ERASE_PIECE, piece: { x, y, t, dir } };
}

export function setPiece(piece) {
  return { type: SET_PIECE, piece: piece};
} 

export function togglePlay() {
  return { type: TOGGLE_PLAY }
}