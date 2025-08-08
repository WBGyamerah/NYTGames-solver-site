//Learned how to code this from https://www.youtube.com/watch?v=eAFcj_2quWI&ab_channel=Insidecode
export function solveBoard(board){
  const boardSize = 9;
  const rows = 9;
  const cols = 9;
  const sRows = 3; //stores the number of rows in the mini square
  const sCols = 3; //stores the number of cols in the mini square
  
  const isValid = (board, row, col, value) => {
    for (let i = 0; i < boardSize; i++) {
      if (board[row][i] === value || board[i][col] === value) {
        return false;
      }
    }
    const boxRowStart = Math.floor(row / sRows) * sRows;
    const boxColStart = Math.floor(col / sCols) * sCols;
    for (let r = boxRowStart; r < boxRowStart + sRows; r++) {
      for (let c = boxColStart; c < boxColStart + sCols; c++) {
        if (board[r][c] === value) {
          return false;
        }
      }
    }   
    return true;
  };

  const solve = (board) => {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (!board[row][col]) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, row, col, String(num))) {
              board[row][col] = String(num);
              if (solve(board)){
                return true;
              } 
              board[row][col] = ''; //emptys cell allowing a different number to be placed
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  const solved = solve(board);
  return solved ? board : null;
}