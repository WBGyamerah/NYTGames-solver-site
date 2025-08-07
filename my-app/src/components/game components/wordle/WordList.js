import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import { styled } from '@mui/material/styles';
import wordlist from '../../../assets/wordlists/wordle/wordlist.txt';

const Container = styled('div')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontWeight: '400',
    fontSize: '20px',
}));

const Columns = styled('ol')({
    columnCount: 3,
    columnGap: '40px',
});

const WordList = forwardRef((props, ref) => {
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch(wordlist).then(file => file.text()).then(text => {const temp = text.split('\n');
        setWords(temp);
        });
    },[]);

    useImperativeHandle(ref, () => ({
        colourKeys: (letters, colours) => {
            let tempWords = [...words];
            
            for(let i = 0; i < letters.length; i++){
                const letter = letters[i].toLowerCase();
                const colour = colours[i];

                if(colour === 'green'){
                    tempWords = tempWords.filter(word => word[i] === letter);
                }else if(colour === 'yellow'){
                    tempWords = tempWords.filter(word => word.includes(letter) && word[i] !== letter);
                }else if(colour === 'gray'){
                    const condition = (char , index) => char === letter && index !== i && colours[index] !== 'gray';
                    const exists = letters.some(condition);

                    if(exists){
                        tempWords = tempWords.filter(word => word[i] !== letter);
                    }else{
                        tempWords = tempWords.filter(word => !word.includes(letter));
                    }
                };
            };
            
            console.log("Words after filtering:", tempWords.length);
            setWords(tempWords);
        },
    }))

    return(
        <Container>
            <Columns>
                {words.slice(0,30).map((word) =>
                 <li key={word}>{word}</li>)}
            </Columns>
        </Container>
    )
});

export default WordList;
