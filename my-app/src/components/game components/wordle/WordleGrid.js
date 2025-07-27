import React, { useState, useEffect, forwardRef, useImperativeHandle, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, TextField } from '@mui/material';
import { keyframes, useTheme } from '@mui/system';
import { sharedTheme } from '../../../theme/theme.js';

const pop = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const flip = keyframes`
  0% { transform: rotateX(0); }
  50% { transform: rotateX(90deg); }
  100% { transform: rotateX(0); }
`;

const cellColours = {
    gray: sharedTheme.custom.wordle.gray,
    yellow: sharedTheme.custom.wordle.yellow,
    green: sharedTheme.custom.wordle.green,
};

const Cell = styled('div')(({theme, filled, colour}) => ({
    border: filled ? colour !== '' ? `2px solid ${cellColours[colour]}` : `2px solid ${theme.custom.wordle.filled}`: `2px solid ${theme.custom.wordle.cellBorder}`,
    backgroundColor: filled ? cellColours[colour] : theme.palette.primary.main,
    width: '52px', 
    height: '52px',
    alignItems: 'center',
    justifyContent: 'center',
    animation: filled && colour !== '' ? `${flip} 500ms ease`: filled ? `${pop} 150ms ease` : 'none',
}));

const WordleGrid = forwardRef((props, ref) => {
    const theme = useTheme();
    const rows = 6;
    const cols = 5;
    const [grid, setGrid] = useState(Array(rows).fill().map(() => Array(cols).fill("")));
    const [colours, setColours] = useState(Array(rows).fill().map(() => Array(cols).fill("")));
    const [clicked, setClicked] = useState(Array(rows).fill().map(() => Array(cols).fill(false)));
    const [activeRow, setActiveRow] = useState(0);
    const [activeCol, setActiveCol] = useState(0);

    const handleKeyDown = useCallback((e) => {
        const key = e.key;
        
        const handleInput = (rowIndex, colIndex, value) => {
            const letter = value.slice(-1); //Gets the last input
            if (!/^[A-Za-z]?$/.test(letter)) return;
            const updatedGrid = grid.map(row => [...row])
            updatedGrid[rowIndex][colIndex] = letter.toUpperCase(); 
            setGrid(updatedGrid);
        };

        if (/^[A-Za-z]$/.test(key)) {
            if (activeCol < cols) {
                handleInput(activeRow, activeCol, key);
                setActiveCol(prev => prev + 1);
            }
        }
        if (key === 'Backspace') {
            if (activeCol > 0) {
                const prevCol = activeCol - 1;
                handleInput(activeRow, prevCol, '');
                const updatedColours = colours.map(row => [...row]); 
                updatedColours[activeRow][prevCol] = ''; //Clears the colour associated with the square
                setActiveCol(prev => prevCol);
                setColours(updatedColours);
            }
        }
        if (key === 'Enter') {
            if (activeCol === cols) {
                const nextRow = activeRow + 1;
                const lettersGuessed = [...grid[activeRow]];
                const lettersColours = [...colours[activeRow]];
                props.keyBoardRef.current?.colourKeys(lettersGuessed, lettersColours);
                setActiveRow(prev => nextRow);
                setActiveCol(0)
            }
        }
    },[activeCol, activeRow, cols, colours, grid]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const handleCellClick = (row, col) => {
        if(activeCol !== cols) return
        if(activeRow !== row) return
        const updatedColours = colours.map(row => [...row]);
        updatedColours[row][col] = cycleColour(updatedColours[row][col]);
        const updatedClicked = clicked.map(row => [...row]);
        updatedClicked[row][col] = true;

        setColours(updatedColours);
        setClicked(updatedClicked);
        setTimeout(() => {
            setClicked(clicked.map(row => row.map(() => false))); //resets clicked for animation
        }, 500); 
    };

    const cycleColour = (colour) => {
        const colourOrder = ["gray", "yellow", "green"];
        const index = colourOrder.indexOf(colour);
        return colourOrder[(index + 1) % colourOrder.length];
    };

    useImperativeHandle(ref, () => ({
        insertValue: (letter) => {
            let event = {};
            if (letter === 'ENTER') {
              event = { key: 'Enter' };
            } else if (letter === 'BACKSPACE') {
              event = { key: 'Backspace' };
            } else{
              event = { key: letter };
            }
            handleKeyDown(event)
        },
    }));


    return (
        <Grid container spacing={0.6} justifyContent='center' alignItems='center' paddingTop={'12px'}>
            {Array(rows).fill().map((_, rowIndex) => (
            <Grid container item key={rowIndex} spacing={0.6} justifyContent='center'>
                {Array(cols).fill().map((_, colIndex) => (
                <Grid item key={colIndex}>
                    <Cell
                     key={`${rowIndex}-${colIndex}-${colours[rowIndex][colIndex]}`} //Forces cell to be reloaded upon colour change as this changes the key
                     filled={!!grid[rowIndex][colIndex]}
                     colour={colours[rowIndex][colIndex]}
                     clicked={clicked[rowIndex][colIndex]}
                     onClick={() => handleCellClick(rowIndex, colIndex)}
                    > 
                        <TextField
                         value={grid[rowIndex][colIndex]}
                         inputProps={{
                          style: { textAlign: 'center', padding: '0', lineHeight: '50px', fontSize: '35px', fontFamily: 'Arial, sans-serif', fontWeight:'700', cursor: 'default', caretColor: 'transparent',
                           color: colours[rowIndex][colIndex] !== '' ? sharedTheme.custom.fixed.white :  theme.palette.primary.contrastText,
                         }}}
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
});

export default WordleGrid;
