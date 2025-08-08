import React, { useState, useRef } from "react";
import { keyframes, styled } from '@mui/material/styles';

const openMenu1 = keyframes`
  0%   { transform: translateY(0) rotate(0deg); }
  50%  { transform: translateY(7px) rotate(0deg); }
  100% { transform: translateY(7px) rotate(-45deg); }
`;

const openMenu2 = keyframes`
  0%   { transform: translateY(0) rotate(0deg); }
  50%  { transform: translateY(-7px) rotate(0deg); }
  100% { transform: translateY(-7px) rotate(45deg); }
`;

const closeMenu1 = keyframes`
  0%   { transform: translateY(7px) rotate(-45deg); }
  50%  { transform: translateY(7px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const closeMenu2 = keyframes`
  0%   { transform: translateY(-7px) rotate(45deg); }
  50%  { transform: translateY(-7px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const Container = styled('div')(({ theme }) => ({
    height: '100%',
    display: 'inline-block',
    alignContent: 'center',
    backgroundColor: theme.palette.primary.main,
    cursor: 'pointer',
    paddingLeft: '15px',
    paddingRight: '15px',

    '&:hover .bar': {
        backgroundColor: theme.custom.grays.menuHover,
    },

    '&:active':{
        backgroundColor: theme.custom.grays.hover,
    },
}));

const Bar = styled('div')(({ theme, animation }) => ({
    width: '20px',
    height: '3px',
    backgroundColor: theme.palette.primary.contrastText,
    margin: '4px',
    borderRadius: '8px',
    animation: animation,
    animationFillMode: 'forwards'
}));

const MenuButton = ({ onClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    let clicked = useRef(false); // to prevent animation on loading, value needs to persist between renders

    const handleClick = () => {
        clicked.current = true;
        setIsOpen(prev => !prev);
        if (onClick) onClick();
    };

    return(
     <Container onClick={handleClick}>
        <Bar animation={clicked.current ? isOpen ? `${openMenu1} 0.4s ease` : `${closeMenu1} 0.4s ease` : ''}/>
        <Bar sx={{ opacity: isOpen ? 0 : 1 }}/>
        <Bar animation={clicked.current ? isOpen ? `${openMenu2} 0.4s ease` : `${closeMenu2} 0.4s ease` : ''}/>
     </Container>
    );
}

export default MenuButton;