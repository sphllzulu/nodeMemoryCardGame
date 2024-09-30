// server/index.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;

app.get('/cards', (req, res) => {
//  creates an empty array with 18  elements
  const cards = [...Array(18).keys()].flatMap((i) => [i, i]);
  const shuffledCards = cards.sort(() => Math.random() - 0.5);
  res.json(shuffledCards);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
