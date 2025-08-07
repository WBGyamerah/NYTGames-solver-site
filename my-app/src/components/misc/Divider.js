import React from "react";
import { styled } from '@mui/material/styles';

const DividerStyle = styled('div')(({ theme }) => ({
  width: '1.5px',
  height: '28px',
  backgroundColor: theme.palette.text.secondary,
  marginRight: '5px',
}));

const Divider = () => {
    return(
     <DividerStyle/>
    );
}

export default Divider;