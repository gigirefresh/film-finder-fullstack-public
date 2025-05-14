console.log("App starting...");

const cowsay = require("cowsay");
const genres = require('./data/genres.js');

// console.log(cowsay.say({
//     text : "Hello Refresh Academy!",
//     e : "XXX",
//     T : "V "
// }));


const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('Hello World!')
  const cowSaid = say({
    text : "Hello Refresh Academy!",
    e : "XXX",
    T : "V "
  })
  res.send("<textarea style='height:300px;width:300px'>" + cowSaid + "</textarea>");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) // http://localhost:3000
})


console.log();