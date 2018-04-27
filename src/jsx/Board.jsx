const makeBoard = (num) => {
  let board = [];
  for (let i = 0; i < num; i += 1) {
    let newRow = new Array(num);
    board.push(newRow);
  }
  return board;
}