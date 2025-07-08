import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
import SudokuBoard from "../../../components/game components/sudoku/SudokuBoard.js";
import NumberPad from "../../../components/game components/sudoku/NumberPad.js";

const PageStyle = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  padding: '32px',
  width: '100%',
})

const SudokuContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  maxWidth: '950px', 
  width: '100%',
});

const SudokuPage = () => {
  const boardRef = useRef();

  const handleNumberPadClick = (value) => {
    boardRef.current?.insertValue(value);
  };

  return (
    <PageStyle>
      <SudokuContainer>
        <SudokuBoard ref={boardRef}/>
        <NumberPad onPadClick={handleNumberPadClick}/>
      </SudokuContainer>
    </PageStyle>
  );
};

export default SudokuPage;