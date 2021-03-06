import { setPiece, drawPiece, erasePiece } from './redux/actions.js';


/*
** Will apply func on every block of piece. 
*/
export function forEachBlockInPiece({x, y, t, dir}, func) {
  let row = 0;
  let column = 0;
  const piece = t.blocks[dir];
  for (let bin = 0x8000; bin > 0; bin >>= 1) {
    if (bin & piece) {
      func(x + column, y + row);
    }
    if (++column === 4) {
      column = 0;
      row++;
    }
  }
}

/*
** Tells if we can draw a piece.
*/
export function isPiecePlacable(piece, grid) {
  console.log("IsPiecePlacable");
  console.log(piece);
  console.log(grid);
  let result = true;
  forEachBlockInPiece(piece, (x, y) => {
    if (!result || !grid[x] || !grid[x][y] || grid[x][y].fill === true) 
      result = false;
  });
  return result;
}

/*
** Make a full copy of the grid.
*/ 
export function copyGrid(grid) {
  return grid.map(row => {
    return row.map(cell => {
      return {...cell};
    })
  })
}
