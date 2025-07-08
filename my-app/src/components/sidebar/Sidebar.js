import React from "react";
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";
import spellingbeeIcon from '../../assets/logos/Spelling Bee Logo.png';
import wordleIcon from '../../assets/logos/Wordle Logo.png';
import letterboxedIcon from '../../assets/logos/LetterBoxed Logo.svg';
import { useTheme } from "@mui/material";
import sudokuIcon from '../../assets/logos/Sudoku Logo.png';
import strandsIcon from '../../assets/logos/Strands Logo.png';

const SidebarStyle = styled('div')(({ theme, isOpen }) => ({
    position: 'fixed',
    height:'100%',
    width: '360px',
    backgroundColor: theme.palette.primary.main,
    zIndex: '10',
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease',
    boxShadow: `4px 0px 5px ${theme.custom.grays.border}`,
}));

const SidebarItems = styled("div")({
    display: "flex",
    flexDirection: "column",
});

const Items = styled('a')(({ theme, gameColour }) => ({
    textDecoration: 'none', 
    color: 'inherit',
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

const Sidebar = ({ isOpen }) => {
    const theme = useTheme();
    
    return(
        <SidebarStyle isOpen={isOpen}>
            <Typography variant='sidebar' style={{fontSize:'12px', paddingLeft:'15px'}}>NEW YORK TIMES SOLVER</Typography>
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