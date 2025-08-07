import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import darkModeIcon from '../../assets/component icons/DarkModeMoon.png';
import lightModeIcon from '../../assets/component icons/LightModeSun.svg';
import { useTheme } from "@mui/material";

const ThemeToggleButton = styled('div')({
    cursor: 'pointer',
});

const ThemeToggleTrack = styled('div')(({ theme }) => ({
    width: '64px',
    height: '24px',
    borderRadius: '20px',
    backgroundColor: theme.custom.grays.toggleTrack,
    display: 'flex',
    alignItems: 'center',
}));

const ThemeToggleThumb = styled('div')(({ theme, isDark }) => ({
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    transform: isDark ? 'translateX(42px)' : 'translateX(0px)',
    transition: 'transform 0.3s ease',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
}));

const ThemeToggle = ({ onClick }) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const icon = isDark ? darkModeIcon : lightModeIcon;
    const title = isDark ? 'Moon' : 'Sun';

    return(
        <ThemeToggleButton onClick={onClick}>
            <ThemeToggleTrack>
                <ThemeToggleThumb isDark={isDark}>
                    <img src={icon} alt={title} style={{ width: '18px', height: '18px' }}></img>
                </ThemeToggleThumb>
            </ThemeToggleTrack>
        </ThemeToggleButton>
    );
}

export default ThemeToggle;