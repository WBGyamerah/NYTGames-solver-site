// I used the code fom https://stackoverflow.com/questions/23497444/how-to-make-a-sudoku-grid-using-html-and-css and adpted it to react
import React, { useState, useImperativeHandle, forwardRef, useEffect } from "react";
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, TextField, useTheme } from "@mui/material";
import { solveBoard } from "./SudokuSolver";

const Board = styled(Table)(({theme}) => ({
    border: `7px solid ${theme.palette.primary.contrastText}`,  
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
    color: theme.palette.primary.contrastText,
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
    const theme = useTheme();
    const rows = 9;
    const cols = 9;
    const sRows = 3; //stores the nu7mber of rows in the mini square
    const sCols = 3; //stores the nu7mber of cols in the mini square
    const [board, setBoard] = useState(Array(rows).fill(null).map(() => Array(cols).fill(''))); //Creates an empty 9x9 2d array
    const [userInput, setUserInput] = useState(Array(rows).fill(null).map(() => Array(cols).fill(false))); //Stores whether a cell is user input or not, used to change cell colour
    const [errors, setErrors] = useState(Array(rows).fill(null).map(() => Array(cols).fill(false)));
    const [selectedCell, setSelectedCell] = useState({ row: null, col: null });

    useEffect(() => {
      const handleKeyDown = (e) => {
        const key = e.key;
        let curRow = selectedCell.row;
        let curCol = selectedCell.col;
        
        if(selectedCell.row === null || selectedCell.col === null) return;

        if((key === 'ArrowUp' || key === 'w') && curRow > 0){
           setSelectedCell({row: curRow - 1, col: curCol});
        }else if((key === 'ArrowDown' || key === 's') && curRow < 8){
           setSelectedCell({row: curRow + 1, col: curCol});
        }else if((key === 'ArrowLeft' || key === 'a') && curCol > 0){
           setSelectedCell({row: curRow, col: curCol  - 1});
        }else if((key === 'ArrowRight' || key === 'd') && curCol < 8){
           setSelectedCell({row: curRow, col: curCol  + 1});
        }else if(key === 'Enter' || key === 'Escape'){
           clearSelected();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => { window.removeEventListener('keydown', handleKeyDown); };
    }, [selectedCell]);

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
        let { row, col } = selectedCell;

        if (value === 'S') {
          if (isErrorsEmpty(errors)) {
            const tempBoard = board.map(row => [...row]);
            if (solveBoard(tempBoard)) {
              console.log("Solved board:");
              setBoard(tempBoard);
            } else {
              alert('Unable to solve the puzzle.');
            }
            clearSelected();
          } else {
            alert('Please fix the highlighted errors before solving.');
          }
        } else if (value === 'C') {
          clearBoard();
          clearSelected();
        } else if (row !== null && col !== null) {
          handleInput(row, col, value);
        }
      },
    }));

    const handleCellClick = (row, col) => {
      setSelectedCell({ row, col });
    };

    const getErrors = (board) => { //Loops through th whole board to highlight errors
      const tempErrors = Array(rows).fill(null).map(() => Array(cols).fill(false)); 
      
      for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
          const value = board[row][col];

          if (!value) continue;
          
          for(let y = 0; y < cols; y++){
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

          const startRow = Math.floor(row / sRows) * sRows; //starting row of the box
          const startCol = Math.floor(col / sCols) * sCols; //starting col of the box
          
          for (let r = startRow; r < startRow + sRows; r++) { //loops through box
            for (let c = startCol; c < startCol + sCols; c++) {
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
      const emptyBoard = Array(rows).fill(null).map(() => Array(cols).fill(''));
      const emptyInput = Array(rows).fill(null).map(() => Array(cols).fill(false));
      const emptyErrors = Array(rows).fill(null).map(() => Array(cols).fill(false));

      setBoard(emptyBoard);
      setUserInput(emptyInput);
      setErrors(emptyErrors);
    };

    const clearSelected = () => {
      setSelectedCell({ row: null, col: null})
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
                        sameRow={selectedCell.row === rowIndex && selectedCell.row !==  null}
                        sameCol={selectedCell.col === colIndex && selectedCell.row !==  null}
                        sameBox={
                          selectedCell.row !==  null &&
                          selectedCell.row !==  null &&
                          Math.floor(selectedCell.row / sRows) === Math.floor(rowIndex / sRows) && 
                          Math.floor(selectedCell.col / sCols) === Math.floor(colIndex / sCols)}
                        sameValue={selectedCell.row !== null && selectedCell.col !== null && board[rowIndex][colIndex] === board[selectedCell.row][selectedCell.col] && board[selectedCell.row][selectedCell.col] !== ''}>
                            <InnerCell>
                              <TextField
                                  value={cell}   
                                  onChange={(input) => handleInput(selectedCell.row, selectedCell.col, input.target.value)} 
                                  inputProps={{
                                  style: { textAlign: 'center', padding: '0', fontSize: '40px', fontWeight:'700', cursor: 'default', caretColor: 'transparent', color: theme.palette.primary.contrastText,}}}
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