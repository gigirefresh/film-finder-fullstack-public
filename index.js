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
  const dataAsJSONText = fs.readFileSync('data/genres.json', 'utf8');
  const genresObj = JSON.parse(dataAsJSONText);
  res.send(genresObj)
})

// https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=4048775a0f068af3048837ff0341a4f7
// https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=4048775a0f068af3048837ff0341a4f7

app.get('/discover/movie', (req, res) => {
  console.log("/discover/movie params: ", req.query)
  // --> stampa  /discover/movie params: { with_genres: '16', api_key: 'ciaomondo' }

  const genreId = req.query.with_genres; 
  const dataAsText = fs.readFileSync(`data/genre-movies-${genreId}.json`, 'utf8');
  const genreMovies = JSON.parse(dataAsText);
  res.send(genreMovies);
})

app.post('/api/movie/like', (req, res) => {
 console.log("Request body: ", req.body);
 const responseObj = { message: 'Data received successfully', yourData: req.body };
 res.status(200).json(responseObj);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) // http://localhost:3000
})

