import React from "react";
import NYTlogo from '../../assets/logos/NYT Logo.svg'
import { styled } from '@mui/material/styles';
import { Tooltip, Typography } from "@mui/material";
import theme from "../../theme/theme";
//CSS found and copied from the website

const HeaderStyle = styled('header')(({ theme }) => ({
    border: `1.5px solid ${theme.custom.grays.border}`,
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    height: '56px',
}));

const Title = styled('a')({
    display: 'flex',
    alignItems: 'center', 
    textDecoration: 'none',
});

//const Divider = styled('h1')(({theme}) => ({
//    color: theme.palette.text.secondary,
//    fontWeight: '1',
//    lineHeight: '1',
//    marginRight: '5px',
//    fontSize: '28px',
//}));
//Didn't work wouldnt place centrally

const Divider = styled('div')(({ theme }) => ({
  width: '1.5px',
  height: '28px',
  backgroundColor: theme.palette.text.secondary,
  marginRight: '5px',
}));

const Header = ({ onClick }) => {
    return(
        <HeaderStyle>
            <Title href="/home" style={{ textDecoration: 'none', color: 'inherit'}}>
                <Tooltip title={`Logo from "https://icons8.com/icon/wIanlRMWltQd/new-york-times"`}>
                    <img src={NYTlogo} style={{width: '32px', height:'32px'}}/>
                </Tooltip>
                <Divider/>
                <Typography variant="h1">Solver</Typography>
            </Title>
        </HeaderStyle>
    );
}
export default Header;