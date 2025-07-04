import React from "react";
import { styled } from '@mui/material/styles';
import BasicButton from "../buttons/basic button/BasicButton";
import { Card, CardContent, Typography, Tooltip } from "@mui/material";

const CardStyle = styled(Card)(({ theme }) => ({
    borderRadius: '8px',
    border: `1.5px solid ${theme.custom.grays.border}`,
    background: theme.palette.primary.main,
    textAlign: 'center',
    overflow: 'hidden',
    width: "279px",       
    height: "335px",   
}));

const CardHeader = styled('div')(({ headercolour }) => ({ //I couldn't centre the icon or text using MUI CardHeader
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
    cursor: 'pointer',
    height: '194px',
    backgroundColor: headercolour,
}));

const GamesCard = ({ link, headerColour, imglink, icon, title, desc }) => {
    return(
        <CardStyle>
            <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardHeader headercolour = {headerColour}>
                    <Tooltip title={`Logo from ${imglink}`}>
                        <img src={icon} alt={title} style={{ width: '95px', height: '95px' }}></img>
                    </Tooltip>
                    <Typography variant="h2">{title}</Typography>
                </CardHeader>
            </a>
            <CardContent>
                <Typography variant="body1" color="text.secondary">{desc}</Typography>
                <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <BasicButton>Solve</BasicButton >
                </a>
            </CardContent>
        </CardStyle>
    );
}

export default GamesCard;