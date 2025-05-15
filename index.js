console.log("App starting...");
const cowsay = require("cowsay");
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  //   res.send('Hello World!')
  const cowSaid = cowsay.say({ text: "Hello Refresh Academy!" })
  res.send("{'genres': [1,2,3]}");
})


app.get('/genre/movie/list', (req, res) => {
  console.log(req.query);
  const genres = {
    "genres": [
      {
        "id": 28,
        "name": "Azione"//Action
      },
      {
        "id": 12,
        "name": "Avventura"//Adventure
      }]
  }
  res.send(genres)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) // http://localhost:3000
})


console.log();