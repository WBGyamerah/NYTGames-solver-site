import React from "react";
import { styled } from '@mui/material/styles';
import darkModeIcon from '../../../../assets/component icons/DarkModeMoon.png';
import lightModeIcon from '../../../../assets/component icons/LightModeSun.svg';
import ToggleButton from "../ToggleButton";
import { useTheme } from "@mui/material";

const ThemeToggle = ({ onClick }) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const icon = isDark ? darkModeIcon : lightModeIcon;
    const title = isDark ? 'Moon' : 'Sun';

    return(
        <ToggleButton clicked={isDark} onClick={onClick}>
            <img src={icon} alt={title} style={{ width: '18px', height: '18px' }}></img>
        </ToggleButton>
    );
}

export default ThemeToggle;