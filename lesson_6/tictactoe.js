// let board = {
//   1: "X", // top left
//   2: " ", // top center
//   3: " ", // top right
//   4: " ", // middle left
//   5: "O", // center
//   6: " ", // middle right
//   7: " ", // bottom left
//   8: " ", // bottom center
//   9: "X", // bottom right
// };

function displayBoard(board) {
  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |   ${board["2"]} |   ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(` ${board['4']}   |  ${board['5']}  |   ${board['6']}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(` ${board['7']}   |   ${board['8']} |  ${board['9']}`);
  console.log("     |     |");
  console.log("");  
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = ' ';
  }

  return board;
}

let board = initializeBoard();
displayBoard(board);
