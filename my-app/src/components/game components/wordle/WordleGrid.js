import React, { useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import { Grid, TextField } from '@mui/material';

const Cell = styled('div')(({theme, filled}) => ({
    border: filled ? `2px solid ${theme.custom.grays.wordleFilled}`: `2px solid ${theme.custom.grays.border}`,
    width: '50px', 
    height: '50px',
    alignItems: 'center',
    justifyContent: 'center',
}));

const WordleGrid = () => {
    const rows = 6;
    const cols = 5;
    const [grid, setGrid] = useState(Array(rows).fill().map(() => Array(cols).fill("")));
    const [activeRow, setActiveRow] = useState(0);
    const [activeCol, setActiveCol] = useState(0);

    const handleInput = (rowIndex, colIndex, value) => {
        const letter = value.slice(-1); //Gets the last input
        if (!/^[A-Za-z]?$/.test(letter)) return;
        const updatedGrid = grid.map(row => [...row])
        updatedGrid[rowIndex][colIndex] = letter.toUpperCase(); 
        setGrid(updatedGrid);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key.toUpperCase();

            if (/^[A-Za-z]$/.test(key)) {
                if (activeCol < cols) {
                    handleInput(activeRow, activeCol, key);
                    setActiveCol(prev => prev + 1);
                }
            }
            if (e.key === 'Backspace') {
                if (activeCol > 0) {
                    const prevCol = activeCol - 1;
                    handleInput(activeRow, prevCol, '');
                    setActiveCol(prev => prevCol);
                }
            }
            if (e.key === 'Enter') {
                if (activeCol === cols) {
                    const nextRow = activeRow + 1;
                    //Method to pass word and colours to solver
                    setActiveRow(prev => nextRow);
                    setActiveCol(0)
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeCol, activeRow, grid]);


    return (
    <Grid container spacing={0.5} justifyContent='center' alignItems='center' paddingTop={'12px'}>
      {Array(rows).fill().map((_, rowIndex) => (
        <Grid container item key={rowIndex} spacing={0.5} justifyContent='center'>
          {Array(cols).fill().map((_, colIndex) => (
            <Grid item key={colIndex}>
              <Cell filled={!!grid[rowIndex][colIndex]}> 
                <TextField
                value={grid[rowIndex][colIndex]}
                inputProps={{
                 style: { textAlign: 'center', padding: '0', lineHeight: '50px', fontSize: '35px', fontFamily: 'Arial, sans-serif', fontWeight:'700', cursor: 'default', caretColor: 'transparent'}}}
                variant="standard"
                fullWidth
                InputProps={{
                 disableUnderline: true,
                 lineHeight: '50px',
                }}
              />
              </Cell>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default WordleGrid;
