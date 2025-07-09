import React from "react";
import { styled } from '@mui/material/styles';

const NumberPadStyle = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '14px',
    justifyContent: 'center',
    paddingTop: '100px',
    maxWidth: '360px', 
});

const NumberPadButton = styled('button')(({ theme }) => ({
    height:'80px',
    width:'80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.custom.sudoku.filled,
    color: theme.palette.primary.contrastText,
    border: `1.5px solid ${theme.custom.sudoku.border}`,
    borderRadius: '4px',
    fontSize: '30px', 
    fontWeight: '700',
    cursor: 'pointer',
    minWidth: '80px',

    '&:active': {
      backgroundColor: theme.palette.primary.main,
    },
}));

const NumberPad = ({ onPadClick }) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <NumberPadStyle>
            {numbers.map(number => (
                <NumberPadButton key={number} onClick={() => onPadClick(String(number))}>
                    {number}
                </NumberPadButton>
            ))}
            <NumberPadButton style={{width:'128px'}} key={'C'} onClick={() => onPadClick(String('C'))}>Clear</NumberPadButton>
            <NumberPadButton style={{width:'128px'}} key={'S'} onClick={() => onPadClick(String('S'))}>Solve</NumberPadButton>
        </NumberPadStyle>
    );
};

 export default NumberPad;
