import React from "react";
import GamesCardList from "../../components/card/GamesCardList.js";
import { useTheme } from "@mui/material/styles";
import spellingbeeIcon from '../../assets/logos/Spelling Bee Logo.png';
import wordleIcon from '../../assets/logos/Wordle Logo.png';
import letterboxedIcon from '../../assets/logos/LetterBoxed Logo.svg';
import sudokuIcon from '../../assets/logos/Sudoku Logo.png';
import strandsIcon from '../../assets/logos/Strands Logo.png';

const HomePage = () => {
    const theme = useTheme();

    const gameCards = [
    {
        link: "/SpellingBee",
        headerColour: theme.custom.games.spellingBee,
        imglink: "https://icons8.com/icon/Nwd9HmGAlc96/bee",
        icon: spellingbeeIcon,
        title: "Spelling Bee",
        desc: "Returns a list of words from the 7 letters provided",
    },
    {
        link: "/Wordle",
        headerColour: theme.custom.games.wordle,
        imglink: "https://icons8.com/icon/60598/data-grid",
        icon: wordleIcon,
        title: "Wordle",
        desc: "Suggests the most efficient guesses to solve the Wordle",
    },
    {
        link: "/LetterBoxed",
        headerColour: theme.custom.games.letterBoxed,
        imglink: "https://icons8.com/icon/Yk8IaKHvWIND/box",
        icon: letterboxedIcon,
        title: "LetterBoxed",
        desc: "Provides 2 words to solve the LetterBoxed",
    },
    {
        link: "/Strands",
        headerColour: theme.custom.games.strands,
        imglink: "https://icons8.com/icon/46812/connect",
        icon: strandsIcon,
        title: "Strands",
        desc: "Provides 2 words to solve the LetterBoxed",
    },
    {
        link: "/Sudoku",
        headerColour: theme.custom.games.sudoku,
        imglink: "https://icons8.com/icon/113694/sudoku",
        icon: sudokuIcon,
        title: "Sudoku",
        desc: "Provides 2 words to solve the LetterBoxed",
    },

    ];


    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <GamesCardList GamesCards={gameCards} />
        </div>
    );
}

export default HomePage;
