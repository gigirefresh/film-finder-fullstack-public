console.log("App starting...");
const express = require('express');
const fs = require('node:fs');
const bodyParser = require('body-parser');

const app = express()
const port = 3000
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/genre/movie/list', (req, res) => {
  console.log(req.query);
  const dataAsText = fs.readFileSync('data/genres.json', 'utf8');
  const genres = JSON.parse(dataAsText);
  res.send(genres)
});

app.get('/discover/movie', (req, res) => {
  console.log("/discover/movie params: ", req.query)
  const genreId = req.query.with_genres; // <-- SECURITY THREAT!
  const dataAsText = fs.readFileSync(`data/genre-movies-${genreId}.json`, 'utf8');
  const genreMovies = JSON.parse(dataAsText);
  res.send(genreMovies);
})

app.post('/api/movie/like', (req, res) => {
 console.log("Request body: ", req.body.movieId);
 const responseObj = { message: 'Data received successfully', yourData: req.body };
 try {
  const votesText = fs.readFileSync(`data/votes.json`, 'utf8'); 
  const votesObj = JSON.parse(votesText);
  console.log("votesObj BEFORE PUSH", votesObj);
  votesObj.likes.push(req.body.movieId);
  console.log("votesObj AFTER PUSH", votesObj);
  fs.writeFileSync("data/votes.json", JSON.stringify(votesObj));
  console.log("Fine scrittura file") // Non lo stampa
 }
 catch (err) {
  console.log("Error: ", err);
 }
 res.status(200).json(responseObj);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) // http://localhost:3000
});

