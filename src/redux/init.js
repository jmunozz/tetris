import { pieces, heightSize, widthSize} from '../constants.js';

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
** Return a new bag of pieces for randomization.
*/
function initBag() {
  const bag = [];
  Object.keys(pieces).forEach((piece) => {
    let pieceCopy = Object.assign({}, pieces[piece]);
    bag.push(pieceCopy);
    bag.push(pieceCopy);
  })
  return bag;
}

/*
** Init all tetris variables
*/
export default function getNewTetris() {

  return {
    gridWithoutCurrent: initGrid(),
    grid: initGrid(),
    currentPiece: null,
    bag: initBag(),
  }
}