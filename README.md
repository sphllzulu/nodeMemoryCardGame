# Harry Potter Card Guessing Game

A magical and interactive card matching game built with React, Vite, Material-UI (MUI), and Node.js with Express, featuring characters from the beloved Harry Potter series.

## Objective

Immerse yourself in the wizarding world as you match pairs of cards featuring your favorite Harry Potter characters. The game challenges players to match pairs of cards in a 6x6 grid. Players select two cards at a time; if they match, they remain open. If they don't match, they flip back to hide their contents. The game is won when all 18 pairs of characters are successfully matched.

## Features

- Dynamic card placement at the start of each game
- User-friendly interface built with React and Material-UI
- 36 cards arranged in a 6x6 grid, featuring names and possibly images of Harry Potter characters
- Game reset functionality to shuffle the magical deck
- Victory pop-up to congratulate the player upon winning, possibly with a Harry Potter-themed message
- No data persistence - fresh start every game, like a new year at Hogwarts

## Technologies Used

- Frontend:
  - React
  - Vite (for fast development and building)
  - Material-UI (MUI) for styling and components
- Backend:
  - Node.js
  - express.js

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later recommended)
- npm (usually comes with Node.js)

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/sphllzulu/nodeMemoryCardGame.git
   cd nodememorycard
   ```

2. Install dependencies for both frontend and backend:
   ```
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd frontend
   npm install
   ```



## Running the Application

1. Start the backend server:
   ```
   cd backend
   node server
   ```
   The server should start running on `http://localhost:5000` .

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   cd memoryCards
   npm run dev
   ```
   The frontend should be accessible at `http://localhost:5173` (or the next available port).

3. Open your browser and navigate to the frontend URL to play the game.

## How to Play

1. When you open the game, you'll see a 6x6 grid of face-down cards, each hiding a Harry Potter character.
2. Click on any two cards to reveal the characters.
3. If the characters match, they'll remain face-up.
4. If they don't match, they'll flip back face-down after a short delay.
5. Continue selecting pairs of cards until all matches are found.
6. Once all characters are matched, a congratulatory pop-up will appear, possibly with a magical twist.
7. Click the reset button at any time to shuffle the cards and start a new magical matching adventure.

## Character List

The game features a variety of beloved Harry Potter characters. Some of the characters you might encounter include:

- Harry Potter
- Hermione Granger
- Ron Weasley
- Albus Dumbledore
- Severus Snape
- Luna Lovegood
- Draco Malfoy
- Neville Longbottom
- And many more!

## Contributing

Contributions are welcome! Whether you're fixing bugs, improving the design, or adding new Harry Potter-themed features, please feel free to submit a Pull Request.

