const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const schokoList = [
  "Schokoladenkekse mit Erdnussbutter und Zuckerguss",
  "Schokoladenpudding mit einem Geheimnis",
  "Schokoladenfondue mit Zuckerwatte",
];

app.get("/schokolade", (req, res) => {
  let indexRandom = Math.floor(Math.random() * schokoList.length);
  res.send(schokoList[indexRandom]);
});
app.listen(3000, () => {
  console.log("app is listen on 'http://localhost:3000'");
});

// app.get("/schokolade/1", (req, res) => {
//   res.send(schokoList[0]);
// });
// app.get("/schokolade/2", (req, res) => {
//   res.send(schokoList[1]);
// });
// app.get("/schokolade/3", (req, res) => {
//   res.send(schokoList[2]);
// });

app.get("/schokolade/:index", (req, res) => {
  let indexRandom = req.params.index - 1;
  if (indexRandom >= 0 && indexRandom <= schokoList.length - 1) {
    return res.status(200).send(schokoList[indexRandom]);
  }
  return res.status(404).send();
});
