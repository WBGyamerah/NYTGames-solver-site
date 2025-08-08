import React from "react";
import { styled } from '@mui/material/styles';

const Container = styled('div')({
    cursor: 'pointer',
});

const Track = styled('div')(({ theme }) => ({
    width: '64px',
    height: '24px',
    borderRadius: '20px',
    backgroundColor: theme.custom.grays.toggleTrack,
    display: 'flex',
    alignItems: 'center',
}));

const Thumb = styled('div')(({ theme, clicked }) => ({
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    transform: clicked ? 'translateX(42px)' : 'translateX(0px)',
    transition: 'transform 0.3s ease',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
}));

const ToggleButton = ({ clicked, onClick, children}) => (
    <Container onClick={onClick}>
        <Track>
            <Thumb clicked={clicked}>
                {children}
            </Thumb>
        </Track>
    </Container>
);

export default ToggleButton;