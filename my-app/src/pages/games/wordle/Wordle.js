import React, { useRef } from "react";
import { styled } from '@mui/material/styles';
import WordleGrid from "../../../components/game components/wordle/WordleGrid.js";
import KeyBoard from "../../../components/game components/wordle/KeyBoard.js";
import WordList from "../../../components/game components/wordle/WordList.js";

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
});


const WordlePage = () => {
  const gridRef = useRef();
  const keyBoardRef = useRef();
  const wordListRef = useRef();
  
  const handleKeyClick = (letter) => {
    gridRef.current?.insertValue(letter);
  };
  
  return (
    <Container>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <WordleGrid ref={gridRef} keyBoardRef={keyBoardRef} wordListRef={wordListRef}/>
          <KeyBoard ref={keyBoardRef} onKeyClick={handleKeyClick}/>
        </div>
        <WordList  ref={wordListRef} />
    </Container>
  );
}

export default WordlePage;
