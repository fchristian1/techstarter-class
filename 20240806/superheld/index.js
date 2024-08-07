const express = require("express");
const app = express();
app.use(express.json());
const superhelden = [
  "Super Sam",
  "Blitz Berta",
  "Maxi Mutig",
  "Stern Stella",
  "Turbo Tim",
  "Raketen Ralf",
  "Funken Franzi",
  "Wolken Willy",
  "Abenteuer Anna",
  "Komet Karl",
  "Zauber Zoe",
  "Piraten Paul",
  "Wirbelwind Wanda",
  "Flinke Finn",
  "Super Susi",
];

app.get("/superhelden", (req, res) => {
  console.log("req");
  let randomNumberA, randomNumberB;
  do {
    randomNumberA = Math.floor(Math.random() * superhelden.length);
    randomNumberB = Math.floor(Math.random() * superhelden.length);
  } while (randomNumberA === randomNumberB);

  if (randomNumberA < randomNumberB) {
    res.send(superhelden.slice(randomNumberA, randomNumberB));
  } else {
    res.send(superhelden.slice(randomNumberB, randomNumberA));
  }
});

app.listen(3003, () => {
  console.log("app is listen on http://localhost:3003");
});
