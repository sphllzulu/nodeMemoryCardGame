

import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import CardComponent from './Card';


const harryPotterCharacters = [
  'Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore', 'Severus Snape',
  'Draco Malfoy', 'Sirius Black', 'Remus Lupin', 'Bellatrix Lestrange', 'Voldemort',
  'Neville Longbottom', 'Luna Lovegood', 'Ginny Weasley', 'Fred Weasley', 'George Weasley',
  'Dobby', 'Cho Chang', 'Cedric Diggory'
];

const Game = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [win, setWin] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const initializeGame = () => {
    // Use 18 unique characters, duplicate and shuffle them for 36 cards
    const selectedCharacters = harryPotterCharacters.slice(0, 18);
    const shuffledCards = shuffle([...selectedCharacters, ...selectedCharacters]);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setWin(false);
    setScore(0);
    setTimer(0);
    setIsActive(true);
  };

  const shuffle = (array) => {
    // Simple Fisher-Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || matchedCards.includes(index)) return;

    setFlippedCards([...flippedCards, index]);

    if (flippedCards.length === 1) {
      const [firstIndex] = flippedCards;
      if (cards[firstIndex] === cards[index]) {
        setMatchedCards([...matchedCards, firstIndex, index]);
        setScore(score + 10);
        if (matchedCards.length + 2 === cards.length) {
          setWin(true);
          setIsActive(false);
        }
      } else {
        setScore(score - 1); // Penalize incorrect match
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#1a1a1a"
      color="white"
      p={4}
    >
      <Typography
        variant="h3"
        gutterBottom
        color="gold"
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
        }}
      >
        Harry Potter Card Guessing Game
      </Typography>

      {win && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bgcolor="gold"
          color="black"
          p={2}
          borderRadius={2}
          mb={4}
          sx={{
            width: { xs: '90%', sm: '60%', md: '40%' },
          }}
        >
          <Typography variant="h5">Congratulations! You've won!</Typography>
          <Typography>Your score: {score}</Typography>
          <Typography>Your time: {timer} seconds</Typography>
        </Box>
      )}

      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        maxWidth="500px"
        mb={4}
        sx={{
          width: { xs: '90%', sm: '80%', md: '60%' },
        }}
      >
        <Typography>Score: {score}</Typography>
        <Typography>Timer: {timer}s</Typography>
      </Box>

      <Grid container spacing={1} justifyContent="center">
        {cards.map((card, index) => (
          <Grid
            item
            key={index}
            xs={4}
            sm={3}
            md={2}
            sx={{
              padding: '5px', 
            }}
          >
            <CardComponent
              index={index}
              value={card}
              isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
              onClick={() => handleCardClick(index)}
            />
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        color="warning"
        onClick={initializeGame}
        sx={{
          mt: 4,
          fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },background:'#740001', color:'gold'
        }}
      >
        Restart Game
      </Button>
    </Box>
  );
};

export default Game;
