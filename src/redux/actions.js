export const DRAW_PIECE = 'DRAW_PIECE';
export const ERASE_PIECE = 'ERASE_PIECE';

export function drawPiece(x, y, t, dir) {
  return { type: DRAW_PIECE, piece: { x, y, t, dir } };
}

export function erasePiece(x, y, t, dir) {
  return { type: ERASE_PIECE, piece: { x, y, t, dir } };
}