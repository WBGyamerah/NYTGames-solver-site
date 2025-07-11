import Layout from "./layout/Layout.js";
import HomePage from "./pages/home/Home";
import { Routes, Route } from 'react-router-dom';
import SpellingBeePage from "./pages/games/spellingbee/SpellingBee.js";
import SudokuPage from "./pages/games/sudoku/Sudoku.js";
import WordlePage from "./pages/games/wordle/Wordle.js";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/Wordle" element={<WordlePage/>}/>
        <Route path="/SpellingBee" element={<SpellingBeePage/>}/>
        <Route path="/Sudoku" element={<SudokuPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
