const boardMaker = (num) => {
  let board = [];
  for (let i = 0; i < num; i += 1) {
    let newRow = new Array(num).fill(0);
    board.push(newRow);
  }
  return board;
}

exports.boardMaker = boardMaker;