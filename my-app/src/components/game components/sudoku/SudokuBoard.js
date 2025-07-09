// I used the code fom https://stackoverflow.com/questions/23497444/how-to-make-a-sudoku-grid-using-html-and-css and adpted it to react
import React, { useState, useImperativeHandle, forwardRef } from "react";
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@mui/material";
import { solveBoard } from "./SudokuSolver";

const Board = styled(Table)(({theme}) => ({
    border: `7px solid black`,  
    width: '550px', 
    height: '550px',
    tableLayout: 'fixed',
}));

const Cell = styled(TableCell)(({ theme, row, col, input, cell, sameRow, sameCol, sameBox, sameValue}) => {
  let backgroundColor;

  if (cell.row === row && cell.col === col) {
    backgroundColor = theme.custom.games.sudoku; // Currently selected cell
  } else if (sameValue) {
    backgroundColor = theme.custom.sudoku.sameNumber;
  } else if (sameRow || sameCol || sameBox) {
    backgroundColor = theme.custom.sudoku.impacted;
  } else if (input[row][col]) {
    backgroundColor = theme.custom.sudoku.filled; // User filled
  } else {
    backgroundColor = theme.palette.primary.main; // Empty
  }

  return {
    height: '60px',
    width: '60px',
    padding: '0px',
    borderLeft: col % 3 === 0 && col !== 0 ? `8px solid ${theme.custom.sudoku.border}` : `2px solid ${theme.custom.sudoku.border}`,
    borderBottom: (row + 1) % 3 === 0 && row !== 8 ? `8px solid ${theme.custom.sudoku.border}` : `2px solid ${theme.custom.sudoku.border}`,
    backgroundColor,
  };
});

const InnerCell = styled('div')({ //Sole purpose to hold the warning dot
  position: 'relative',
  width: '100%',
  height: '100%',
});

const Warning = styled('div')(({theme}) => ({
  position: 'absolute',
  bottom: '4px',
  right: '4px',
  width: '11px',
  height: '11px',
  borderRadius: '50%',
  backgroundColor: theme.custom.sudoku.warning,

  transform: 'scale(0)',
  opacity: 0,
  transition: 'transform 0.3s ease',

  '&.visible': {
    transform: 'scale(1)',
    opacity: 1,
  }
}));

const SudokuBoard = forwardRef((props, ref) => {
    const [board, setBoard] = useState(Array(9).fill(null).map(() => Array(9).fill(''))); //Creates an empty 9x9 2d array
    const [userInput, setUserInput] = useState(Array(9).fill(null).map(() => Array(9).fill(false))); //Stores whether a cell is user input or not, used to change cell colour
    const [errors, setErrors] = useState(Array(9).fill(null).map(() => Array(9).fill(false)));
    const [selectedCell, setSelectedCell] = useState({ row: null, col: null });

    const handleInput = (row, col, value) => {
        const digit = value.slice(-1); //Gets the last input
        if (!/^[1-9]?$/.test(digit)) return;
        const updatedBoard = board.map(row => [...row]);
        updatedBoard[row][col] = digit;
        const updatedUserInput = userInput.map(row => [...row]);
        updatedUserInput[row][col] = digit !== '';
        const updatedErrors = getErrors(updatedBoard);
        
        setUserInput(updatedUserInput);
        setBoard(updatedBoard);
        setErrors(updatedErrors);
    };

    useImperativeHandle(ref, () => ({
      insertValue: (value) => {
        const { row, col } = selectedCell;

        if (value === 'S') {
          if (isErrorsEmpty(errors)) {
            const tempBoard = board.map(row => [...row]);

            if (solveBoard(tempBoard)) {
              console.log("Solved board:");
              setBoard(tempBoard);
            } else {
              alert('Unable to solve the puzzle.');
            }
          } else {
            alert('Please fix the highlighted errors before solving.');
          }
        } else if (value === 'C') {
          clearBoard();
        } else if (row !== null && col !== null) {
          handleInput(row, col, value);
        }
      },
    }));


    const handleCellClick = (row, col) => {
      setSelectedCell({ row, col });
    };

    const getErrors = (board) => { //Loops through th whole board to highlight errors
      const tempErrors = Array(9).fill(null).map(() => Array(9).fill(false)); 
      
      for(let row = 0; row < 9; row++){
        for(let col = 0; col < 9; col++){
          const value = board[row][col];

          if (!value) continue;
          
          for(let y = 0; y < 9; y++){
            if(y !== col && board[row][y] === value){
              tempErrors[row][col] = true;
              tempErrors[row][y] = true;
            }
          }

          for(let x = 0; x < 9; x++){
            if(x !== row && board[x][col] === value){
              tempErrors[row][col] = true;
              tempErrors[x][col] = true;
            }
          }

          const startRow = Math.floor(row / 3) * 3; //starting row of the box
          const startCol = Math.floor(col / 3) * 3; //starting col of the box
          
          for (let r = startRow; r < startRow + 3; r++) { //loops through box
            for (let c = startCol; c < startCol + 3; c++) {
              if ((r !== row || c !== col) && board[r][c] === value) {
                tempErrors[row][col] = true;
                tempErrors[r][c] = true;
              }
            }
          }
        }
      }
      return tempErrors;
    };

    const clearBoard = () => {
      const emptyBoard = Array(9).fill(null).map(() => Array(9).fill(''));
      const emptyInput = Array(9).fill(null).map(() => Array(9).fill(false));
      const emptyErrors = Array(9).fill(null).map(() => Array(9).fill(false));

      setBoard(emptyBoard);
      setUserInput(emptyInput);
      setErrors(emptyErrors);
    };

    const isErrorsEmpty = (board) => {
      return board.every(row => row.every(cell => cell === false));
    };

    return(
        <TableContainer>
            <Board>
                <TableBody>
                    {board.map((row, rowIndex) => (
                     <TableRow key={rowIndex}>
                        {row.map((cell, colIndex) => (
                        <Cell 
                        key={colIndex} 
                        row={rowIndex} 
                        col={colIndex} 
                        input={userInput} 
                        cell={selectedCell} 
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                        sameRow={selectedCell.row === rowIndex}
                        sameCol={selectedCell.col === colIndex}
                        sameBox={Math.floor(selectedCell.row / 3) === Math.floor(rowIndex / 3) && Math.floor(selectedCell.col / 3) === Math.floor(colIndex / 3)}
                        sameValue={selectedCell.row !== null && selectedCell.col !== null && board[rowIndex][colIndex] === board[selectedCell.row][selectedCell.col] && board[selectedCell.row][selectedCell.col] !== ''}>
                            <InnerCell>
                              <TextField
                                  value={cell}   
                                  onChange={(input) => handleInput(rowIndex, colIndex, input.target.value)} 
                                  inputProps={{
                                  style: { textAlign: 'center', padding: '0', fontSize: '40px', fontWeight:'700', cursor: 'default', caretColor: 'transparent'}}}
                                  variant="standard"
                                  fullWidth
                                  InputProps={{
                                  disableUnderline: true,
                                  sx: { padding: 0, height: '100%', lineHeight:'normal'}}}
                              />
                              <Warning className={errors[rowIndex][colIndex] ? 'visible' : ''}/>
                            </InnerCell>
                        </Cell>
                        ))}
                    </TableRow>
                    ))}
                </TableBody>
            </Board>
        </TableContainer>
    );
})

export default SudokuBoard;