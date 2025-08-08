import React from "react";
import { styled } from '@mui/material/styles';
import GamesCard from "./GamesCard.js";

const Container = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    justifyContent: 'center',
    padding: '24px',
});

const Wrapper = styled('div')({
    flex: '1 1 300px',
    maxWidth: '300px',
    minWidth: '280px',
});

const GamesCardList = ({ GamesCards = [] }) => (
    <Container>
        {GamesCards.map((card, index) => (
            <Wrapper key={index}>
                <GamesCard
                    link={card.link}
                    headerColour={card.headerColour}
                    imglink={card.imglink}
                    icon={card.icon}
                    title={card.title}
                    desc={card.desc}
                />
            </Wrapper>
        ))}
    </Container>
);

export default GamesCardList;