import React, { useState } from "react";
import { styled } from '@mui/material/styles';

const MenuButtonStyle = styled('div')(({ theme }) => ({
    display: 'inline-block',
    alignContent: 'center',
    backgroundColor: theme.palette.primary.main,
    cursor: 'pointer',
    height: '100%',
    paddingLeft: '15px',
    paddingRight: '15px',

    '&:hover .bar': {
        backgroundColor: theme.custom.grays.menuHover,
    },
}));

const Bar = styled('div')(({ theme }) => ({
    width: '20px',
    height: '3px',
    backgroundColor: theme.palette.primary.contrastText,
    margin: '4px',
    borderRadius: '8px',
    transition: 'transform 0.2s ease, opacity 0.1s ease',
}));

const MenuButton = ({}) => {
    const [isOpen, setIsOpen] = useState(false);

    return(
     <MenuButtonStyle onClick={() => setIsOpen(!isOpen)}>
        <Bar className="bar bar1" sx={{ transform: isOpen ? 'translateY(7px) rotate(-45deg)' : 'none'}}/>
        <Bar className="bar bar2" sx={{ opacity: isOpen ? 0 : 1 }}/>
        <Bar className="bar bar3" sx={{ transform: isOpen ? 'translateY(-7px) rotate(45deg)' : 'none'}}/>
     </MenuButtonStyle>
    );
}

export default MenuButton;