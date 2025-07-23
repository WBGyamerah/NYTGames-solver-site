import React, { forwardRef, useImperativeHandle, useState } from "react";
import { styled } from '@mui/material/styles';
import backspaceIcon from '../../../assets/component icons/BackspaceIcon.png';
import { useTheme } from "@mui/material";

const KeyBoardStyle = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'center',
    paddingTop: '10px',
    maxWidth: '540px', 
});

const KeyButton = styled('button')(({ theme }) => ({
    height: '60px',
    width: '45px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.custom.wordle.keyPad,
    color: theme.palette.primary.contrastText,
    borderRadius: '4px',
    border: 'none',
    fontWeight: '700',
    fontSize: '20px',
    cursor: 'pointer',
    minWidth: '45px',
}));

const KeyBoard = forwardRef(({onKeyClick}, ref) => {
    const theme = useTheme();
    const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    const [keyColours, setKeyColours] = useState({});
    const keyColour = {
        gray: theme.custom.wordle.gray,
        yellow: theme.custom.wordle.yellow,
        green: theme.custom.wordle.green,
    };

    useImperativeHandle(ref, () => ({
        colourKeys: (letters, colours) => {
            const tempKeyColours = {...keyColours};

            letters.forEach((letter, i) => {
                const colour = colours[i];

                if(tempKeyColours[letter] === 'green' || (tempKeyColours[letter] === 'yellow' && colour === 'gray')){
                    return;
                }

                tempKeyColours[letter] = colour;
            });
            setKeyColours(tempKeyColours);
        },
    }))
    return (
        <KeyBoardStyle>
            {letters.map(letter => {
             const specialButton = letter === 'ENTER';
             return ( 
                <KeyButton key={letter} onClick={() => onKeyClick(letter)} 
                style={{ 
                    width: specialButton ? '70px' : '45px', 
                    fontSize: specialButton ? '12.5px' : '20px',
                    backgroundColor: keyColours[letter] ? keyColour[keyColours[letter]] : theme.custom.wordle.keyPad,
                    color: keyColours[letter] ? theme.palette.primary.main : theme.palette.primary.contrastText,
                    }}>
                    {letter}
                </KeyButton>
            )})}
            <KeyButton key={'BACKSPACE'} onClick={() => onKeyClick('BACKSPACE')} style={{ width: '70px' }}>
                <img src={backspaceIcon} alt={'backspace'} style={{ width: '32px', height: '32px' }}></img>
            </KeyButton>
        </KeyBoardStyle>
    );
});

export default KeyBoard;