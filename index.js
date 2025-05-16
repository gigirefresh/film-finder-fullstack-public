console.log("App starting...");
const cowsay = require("cowsay");
const express = require('express');
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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) // http://localhost:3000
})


console.log();