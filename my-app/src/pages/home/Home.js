import React from "react";
import GamesCardList from "../../components/card/GamesCardList.js";
import { useTheme } from "@mui/material/styles";
import spellingbeeIcon from '../../assets/logos/Spelling Bee Logo.png';
import wordleIcon from '../../assets/logos/Wordle Logo.png';
import letterboxedIcon from '../../assets/logos/LetterBoxed Logo.svg';

const HomePage = () => {
    const theme = useTheme();

    const gameCards = [
    {
        link: "/SpellingBee",
        headerColour: theme.custom.games.spellingbee,
        imglink: "https://icons8.com/icon/Nwd9HmGAlc96/bee",
        icon: spellingbeeIcon,
        title: "Spelling Bee",
        desc: "Returns a list of words from the 7 letters provided",
    },
    {
        link: "/Wordle",
        headerColour: theme.custom.games.wordle,
        imglink: "https://icons8.com/icon/Nwd9HmGAlc96/bee",
        icon: wordleIcon,
        title: "Wordle",
        desc: "Suggests the most efficient guesses to solve the Wordle",
    },
    {
        link: "/LetterBoxed",
        headerColour: theme.custom.games.letterboxed,
        imglink: "https://icons8.com/icon/Nwd9HmGAlc96/bee",
        icon: letterboxedIcon,
        title: "LetterBoxed",
        desc: "Provides 2 words to solve the LetterBoxed",
    },
    ];


    return (
        <div>
            <header>
                <h1>NYT Solver</h1>
            </header>
            <main>
                <GamesCardList GamesCards={gameCards} />
            </main>
        </div>
    );
}

export default HomePage;
