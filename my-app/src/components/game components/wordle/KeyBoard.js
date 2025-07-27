import React, { forwardRef, useImperativeHandle, useState } from "react";
import { styled } from '@mui/material/styles';
import lightModeBSIcon from '../../../assets/component icons/backspace/BackspaceIcon.png';
import darkModeBSIcon from '../../../assets/component icons/backspace/DM BackspaceIcon.png';
import { useTheme } from "@mui/material";

const KeyBoardStyle = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    justifyContent: 'center',
    paddingTop: '12px',
    maxWidth: '490px', 
});

const KeyButton = styled('button')(({ theme }) => ({
    height: '60px',
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
    minWidth: '40px',
}));

const KeyBoard = forwardRef(({onKeyClick, isDarkMode}, ref) => {
    const theme = useTheme();
    const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    const [keyColours, setKeyColours] = useState({});
    const keyColour = {
        gray: theme.custom.wordle.gray,
        yellow: theme.custom.wordle.yellow,
        green: theme.custom.wordle.green,
    };
    const backspaceIcon = isDarkMode ? darkModeBSIcon: lightModeBSIcon;

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
                <KeyButton onClick={() => onKeyClick(letter)} 
                style={{ 
                    width: specialButton ? '70px' : '42px', 
                    fontSize: specialButton ? '12.5px' : '20px',
                    backgroundColor: keyColours[letter] ? keyColour[keyColours[letter]] : theme.custom.wordle.keyPad,
                    color: keyColours[letter] ? theme.palette.primary.main : theme.palette.primary.contrastText,
                    }}>
                    {letter}
                </KeyButton>
            )})}
            <KeyButton onClick={() => onKeyClick('BACKSPACE')} style={{ width: '70px' }}>
                <img src={backspaceIcon} alt={'backspace'} style={{ width: '32px', height: '32px' }}></img>
            </KeyButton>
        </KeyBoardStyle>
    );
});

export default KeyBoard;