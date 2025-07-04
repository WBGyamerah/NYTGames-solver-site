import React from "react";
import { styled } from '@mui/material/styles';
//CSS found and copied from the website

const BasicButton = styled('button')(({ theme }) => ({
  display: 'flex',
  flexdirection: 'column',
  alignitems: 'center',
  justifycontent: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: `1.5px solid ${theme.custom.grays.border}`,
  borderRadius: '44px',
  padding: '12px 100px',
  fontSize: '1rem',
  lineHeight: '1.3rem',
  letterSpacing: '.25px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',

  '&:hover': {
    backgroundColor: theme.custom.grays.hover,
  },
}));

const Button = ({ children, onClick }) => {
    return(
     <BasicButton onClick={onClick}>
        {children}
     </BasicButton>
    );
}

export default Button;