import React from "react";
import NYTlogo from '../../assets/logos/NYT Logo.svg'
import MenuButton from "../buttons/menu button/MenuButton.js";
import { styled } from '@mui/material/styles';
import { Tooltip, Typography } from "@mui/material";
//CSS found and copied from the website

const HeaderStyle = styled('header')(({ theme }) => ({
    position: 'fixed',
     top: 0,
    left: 0,
    right: 0,
    border: `1.5px solid ${theme.custom.grays.border}`,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    height: '56px',
    width: '100%',
    zIndex: '100',
}));

const Title = styled('a')({
    display: 'flex',
    alignItems: 'center', 
    textDecoration: 'none',
});

const Divider = styled('div')(({ theme }) => ({
  width: '1.5px',
  height: '28px',
  backgroundColor: theme.palette.text.secondary,
  marginRight: '5px',
}));

const Header = ({ onMenuClick }) => {
    return(
        <HeaderStyle>
            <MenuButton onClick={onMenuClick}/>
            <Title href="/home" style={{ textDecoration: 'none', color: 'inherit'}}>
                <Tooltip title={`Logo from "https://icons8.com/icon/wIanlRMWltQd/new-york-times"`}>
                    <img src={NYTlogo} alt="NYT-Logo" style={{width: '30px', height:'30px'}}/>
                </Tooltip>
                <Divider/>
                <Typography variant="h1">Solver</Typography>
            </Title>
        </HeaderStyle>
    );
}
export default Header;