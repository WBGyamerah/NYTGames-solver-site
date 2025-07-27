import React from "react";
import { styled, useTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";
import lightModeSBIcon from '../../assets/logos/spellingbee/Spelling Bee Logo.png';
import darkModeSBIcon from '../../assets/logos/spellingbee/DM Spelling Bee Logo.png';
import lightModeWIcon from '../../assets/logos/wordle/Wordle Logo.png';
import darkModeWIcon from '../../assets/logos/wordle/DM Wordle Logo.png';
import lightModeLBIcon from '../../assets/logos/letterboxed/LetterBoxed Logo.svg';
import darkModeLBIcon from '../../assets/logos/letterboxed/DM LetterBoxed Logo.svg';
import lightModeSIcon from '../../assets/logos/sudoku/Sudoku Logo.png';
import darkModeSIcon from '../../assets/logos/sudoku/DM Sudoku Logo.png';
import lightModeSTIcon from '../../assets/logos/strands/Strands Logo.png';
import darkModeSTIcon from '../../assets/logos/strands/DM Strands Logo.png';

const SidebarStyle = styled('div')(({ theme, isOpen }) => ({
    position: 'fixed',
    height:'100%',
    width: '360px',
    backgroundColor: theme.palette.primary.main,
    zIndex: '10',
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease',
    boxShadow: isOpen ?`2px 0px 3px ${theme.custom.grays.border}` : '',
}));

const SidebarItems = styled("div")({
    display: "flex",
    flexDirection: "column",
});

const Items = styled('a')(({ theme, gameColour }) => ({
    textDecoration: 'none', 
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center', 
    gap: '8px',
    cursor: 'pointer',
    position: 'relative',
    borderBottom: `1.5px solid ${theme.custom.grays.border}`,
    padding: '9px',
    '&:hover': {
        backgroundColor: theme.custom.grays.hover,
    },

    '&::before':{
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '0px',
        backgroundColor: gameColour,
    },
    
    '&:hover::before':{
        width: '6px'
    },
}));

const Sidebar = ({ isOpen, isDarkMode }) => {
    const theme = useTheme();
    const spellingbeeIcon = isDarkMode ? darkModeSBIcon : lightModeSBIcon;
    const wordleIcon = isDarkMode ? darkModeWIcon : lightModeWIcon;
    const letterboxedIcon = isDarkMode ? darkModeLBIcon : lightModeLBIcon;
    const strandsIcon = isDarkMode ? darkModeSTIcon : lightModeSTIcon;
    const sudokuIcon = isDarkMode ? darkModeSIcon : lightModeSIcon;
    
    return(
        <SidebarStyle isOpen={isOpen}>
            <Typography variant='sidebar' style={{fontSize:'12px', paddingLeft:'15px', color: theme.palette.primary.contrastText}}>NEW YORK TIMES SOLVER</Typography>
            <SidebarItems>
                <Items href = "/SpellingBee" gameColour={theme.custom.games.spellingBee} style={{paddingLeft:'18px'}}>
                    <img src={spellingbeeIcon} alt='SpellingBee' style={{ width: '20px', height: '20px' }}></img>
                    <Typography variant="sidebar">Spelling Bee</Typography>
                </Items>

                <Items href = "/Wordle" gameColour={theme.custom.games.wordle} style={{paddingLeft:'18px'}}>
                    <img src={wordleIcon} alt='Wordle' style={{ width: '20px', height: '20px' }}></img>
                    <Typography variant="sidebar">Wordle</Typography>
                </Items>

                <Items href = "/LetterBoxed" gameColour={theme.custom.games.letterBoxed} style={{paddingLeft:'18px'}}>
                    <img src={letterboxedIcon} alt='LetterBoxed' style={{ width: '20px', height: '20px' }}></img>
                    <Typography variant="sidebar">LetterBoxed</Typography>
                </Items>

                <Items href = "/Strands" gameColour={theme.custom.games.strands} style={{paddingLeft:'18px'}}>
                    <img src={strandsIcon} alt='Strands' style={{ width: '20px', height: '20px' }}></img>
                    <Typography variant="sidebar">Strands</Typography>
                </Items>

                <Items href = "/Sudoku" gameColour={theme.custom.games.sudoku} style={{paddingLeft:'18px'}}>
                    <img src={sudokuIcon} alt='Sudoku' style={{ width: '20px', height: '20px' }}></img>
                    <Typography variant="sidebar">Sudoku</Typography>
                </Items>
            </SidebarItems>
        </SidebarStyle>
    );
}

export default Sidebar;