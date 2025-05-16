console.log("App starting...");
const cowsay = require("cowsay");
const express = require('express');
const fs = require('node:fs');

const app = express()
const port = 3000
app.use(express.static("public"));


//// commentin this one so out so the we can default to index.html on /
// app.get('/', (req, res) => {
//   res.send("hello world");
// })


app.get('/genre/movie/list', (req, res) => {
  console.log(req.query);
  const dataAsText = fs.readFileSync('data/genres.json', 'utf8');
  const genres = JSON.parse(dataAsText);
  res.send(genres)
})

// https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=4048775a0f068af3048837ff0341a4f7
// https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=4048775a0f068af3048837ff0341a4f7
app.get('/discover/movie', (req, res) => {
  console.log("/discover/movie params: ", req.query)
  // --> stampa  /discover/movie params: { with_genres: '16', api_key: 'ciaomondo' }

  // if (req.query.with_genres==='28') {
  //   const dataAsText = fs.readFileSync('data/genre-movies-28.json', 'utf8');
  //   const genreMovies = JSON.parse(dataAsText);
  //   res.send(genreMovies)
  // }
  // if (req.query.with_genres==='99') {
  //   const dataAsText = fs.readFileSync('data/genre-movies-99.json', 'utf8');
  //   const genreMovies = JSON.parse(dataAsText);
  //   res.send(genreMovies)
  // }
  const genreId = req.query.with_genres; // <-- SECURITY THREAT!
  const dataAsText = fs.readFileSync(`data/genre-movies-${genreId}.json`, 'utf8');
  const genreMovies = JSON.parse(dataAsText);
  res.send(genreMovies)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) // http://localhost:3000
})

