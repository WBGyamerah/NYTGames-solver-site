import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import { styled } from '@mui/material/styles';
import wordlist from '../../../assets/wordlists/wordle/wordlist.txt';

const Container = styled('div')({ 
});

const Columns = styled('ol')({
    columnCount: 3,
    columnGap: '30px',
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
            console.log("Filtering with:", letters, colours);
            console.log("Words before filtering:", tempWords.length);

            letters.forEach((letter, i) => {
                const colour = colours[i];

                if(colour === 'green'){
                    tempWords = tempWords.filter(word => word[i] === letter);
                    console.log("Words after filtering green:", tempWords.length);
                }else if(colour === 'yellow'){
                    tempWords = tempWords.filter(word => word.includes(letter) && word[i] !== letter);
                    console.log("Words after filtering yellow:", tempWords.length);
                }else if(colour === 'gray'){
                    tempWords = tempWords.filter(word => !word.includes(letter));
                    console.log("Words after filtering grey:", tempWords.length);
                };
                console.log("Words after filtering:", tempWords.length);
                setWords(tempWords);
            });
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
