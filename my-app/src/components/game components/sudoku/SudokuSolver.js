//Learned how to code this from https://www.youtube.com/watch?v=eAFcj_2quWI&ab_channel=Insidecode

export function solveBoard(board){
    const isValid = (board, row, col, value) => {
        for(let z = 0; z < 9; z++){
            //loops through row, col, then same box
            if(board[row][z] === value || board[z][col]=== value || board[3 * Math.floor(row / 3) + Math.floor(z / 3)][3 * Math.floor(col / 3) + z % 3] === value){
                return false;
            }
        }
        return true;
    }

    const solve = (board) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
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