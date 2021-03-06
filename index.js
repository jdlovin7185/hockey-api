const express = require("express");
const app = express();

let topPlayers = [
  {

  }
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to Team USA');
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/players', (req, res) => {
  res.json(topPlayers);
});

//listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});