import React from "react";
import { styled } from '@mui/material/styles';
//CSS found and copied from the website

const Container = styled('button')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
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

  '&:hover': {
    backgroundColor: theme.custom.grays.hover,
    transition: 'background-color 0.2s ease',
  },
}));

const BasicButton = ({ children, onClick }) => (
  <Container onClick={onClick}>
    {children}
  </Container>
);

export default BasicButton;