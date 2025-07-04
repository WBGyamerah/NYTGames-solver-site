import React from "react";
import { styled } from '@mui/material/styles';
import GamesCard from "./GamesCard.js";

const CardsContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    justifyContent: 'center',
    padding: '24px',
});

const GameCardWrapper = styled('div')({
    flex: '1 1 300px',
    maxWidth: '300px',
    minWidth: '280px',
});

const GamesCardList = ({ GamesCards = [] }) => {
    return (
        <CardsContainer>
            {GamesCards.map((card, index) => (
                <GameCardWrapper key={index}>
                    <GamesCard
                        link={card.link}
                        headerColour={card.headerColour}
                        imglink={card.imglink}
                        icon={card.icon}
                        title={card.title}
                        desc={card.desc}
                    />
                </GameCardWrapper>
            ))}
        </CardsContainer>
    );
}

export default GamesCardList;