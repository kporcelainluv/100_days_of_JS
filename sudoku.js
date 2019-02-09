function getColByIndex(board, index) {
  return board.reduce((col, row) => col.concat(row[index]), []);
}

const isSeqCorrect = seq => new Set(seq).size === 9;

function getAreaAsSeq(board, [x, y]) {
  return board
    .slice(y, y + 3)
    .reduce((res, row) => [...res, ...row.slice(x, x + 3)], []);
}

const coords = [
  [0, 0],
  [0, 3],
  [0, 6],
  [3, 0],
  [3, 3],
  [3, 6],
  [6, 0],
  [6, 3],
  [6, 6]
];

function doneOrNot(board) {
  let areRowsCorrect = board.every(isSeqCorrect);

  let areColsCorrect = board
    .map((_, idx) => getColByIndex(board, idx))
    .every(isSeqCorrect);

  let areAreasCorrect = coords
    .map(coord => getAreaAsSeq(board, coord))
    .every(isSeqCorrect);

  if (areAreasCorrect && areColsCorrect && areRowsCorrect) {
    return "Finished!";
  } else {
    return "Try again!";
  }
}
