import React, { useRef } from "react";
import WordleGrid from "../../../components/game components/wordle/WordleGrid.js";
import KeyBoard from "../../../components/game components/wordle/KeyBoard.js";

const WordlePage = (isDarkMode) => {
  const gridRef = useRef();
  const keyBoardRef = useRef();
  
  const handleKeyClick = (letter) => {
    gridRef.current?.insertValue(letter);
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <WordleGrid ref={gridRef} keyBoardRef={keyBoardRef}/>
        <KeyBoard ref={keyBoardRef} onKeyClick={handleKeyClick} isDarkMode={isDarkMode}/> 
    </div> 
  );
}

export default WordlePage;
