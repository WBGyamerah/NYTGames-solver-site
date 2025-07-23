import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import darkModeIcon from '../../assets/component icons/DarkModeMoon.png';
import lightModeIcon from '../../assets/component icons/LightModeSun.svg';

const ThemeToggleButton = styled('div')(({ theme }) => ({
    cursor: 'pointer',
}));

const ThemeToggleTrack = styled('div')(({ theme }) => ({
    width: '64px',
    height: '24px',
    borderRadius: '20px',
    backgroundColor: theme.custom.grays.toggleTrack,
    display: 'flex',
    alignItems: 'center',
}));

const ThemeToggleThumb = styled('div')(({ theme, isDarkMode }) => ({
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    transform: isDarkMode ? 'translateX(42px)' : 'translateX(0px)',
    transition: 'transform 0.3s ease',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
}));

const ThemeToggle = ({ onClick, isDarkMode }) => {
    const icon = isDarkMode ? darkModeIcon : lightModeIcon;
    const title = isDarkMode ? 'Moon' : 'Sun';

    return(
        <ThemeToggleButton onClick={onClick}>
            <ThemeToggleTrack>
                <ThemeToggleThumb isDarkMode={isDarkMode}>
                    <img src={icon} alt={title} style={{ width: '18px', height: '18px' }}></img>
                </ThemeToggleThumb>
            </ThemeToggleTrack>
        </ThemeToggleButton>
    );
}

export default ThemeToggle;