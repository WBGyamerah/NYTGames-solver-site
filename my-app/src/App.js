import React, { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './theme/theme.js';
import Layout from "./layout/Layout.js";
import HomePage from "./pages/home/Home";
import { Routes, Route } from 'react-router-dom';
import SpellingBeePage from "./pages/games/spellingbee/SpellingBee.js";
import SudokuPage from "./pages/games/sudoku/Sudoku.js";
import WordlePage from "./pages/games/wordle/Wordle.js";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    const curTheme = localStorage.getItem('theme'); //Retrieves theme from DOM
    if(curTheme === null) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; //Checks Browser preference
      setIsDarkMode(prefersDark);
      localStorage.setItem('theme', prefersDark); //Stores theme in DOM
    }else{
      setIsDarkMode(curTheme === 'true');
    }
  },[]);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const curTheme = !prev;
      localStorage.setItem('theme', curTheme);
      return curTheme;
    });
  };

  if (isDarkMode === null) return null; //Delays render until a theme is set/ prevents theme changes on loading

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline/>
      <Layout onToggleTheme={toggleTheme} isDarkMode={isDarkMode}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/Wordle" element={<WordlePage/>}/>
          <Route path="/SpellingBee" element={<SpellingBeePage/>}/>
          <Route path="/Sudoku" element={<SudokuPage/>}/>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
