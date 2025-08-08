import React from "react";
import LightModeNYTlogo from '../../assets/logos/nyt/NYT Logo.svg'
import DarkModeNYTlogo from '../../assets/logos/nyt/DarkModeNYTLogo.svg'
import MenuButton from "../buttons/menu button/MenuButton.js";
import ThemeToggle from "../buttons/toggle button/theme toggle/ThemeToggle.js";
import Divider from "../misc/Divider.js";
import { styled, useTheme } from '@mui/material/styles';
import { Tooltip, Typography } from "@mui/material";
//CSS found and copied from the website

const HeaderStyle = styled('header')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    borderBottom: `1.5px solid ${theme.custom.grays.border}`,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    height: '56px',
    width: '100%',
    zIndex: '100',
    boxSizing: 'border-box',
}));

const Title = styled('a')({
    display: 'flex',
    alignItems: 'center', 
    textDecoration: 'none',
});

const RightSide = styled('div')({
    marginLeft: 'auto',
    paddingRight: '12px'
});

const Header = ({ onMenuClick, onToggleTheme }) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const NYTlogo = isDark ? DarkModeNYTlogo : LightModeNYTlogo;

    return(
        <HeaderStyle>
            <MenuButton onClick={onMenuClick}/>
            <Title href="/" style={{ textDecoration: 'none', color: 'inherit'}}>
                <Tooltip title={`Logo from "https://icons8.com/icon/wIanlRMWltQd/new-york-times"`}>
                    <img src={NYTlogo} alt="NYT-Logo" style={{width: '30px', height:'30px'}}/>
                </Tooltip>
                <Divider/>
                <Typography variant="h1" style={{color: theme.palette.primary.contrastText}}>Solver</Typography>
            </Title>
            <RightSide>
                <ThemeToggle onClick={onToggleTheme}/>
            </RightSide>
        </HeaderStyle>
    );
}
export default Header;