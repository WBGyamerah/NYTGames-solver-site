import React from "react";
import { useTheme } from "@mui/material/styles";
import WordleGrid from "../../../components/game components/wordle/WordleGrid";

const WordlePage = () => {
    const theme = useTheme();
    return (
        <WordleGrid/>
    );
}

export default WordlePage;
