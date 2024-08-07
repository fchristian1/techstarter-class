const express = require("express");
const fs = require("node:fs");

const app = express();
app.use(express.json());
let counter = 0;

app.get("/", (req, res) => {
  const data = fs.readFileSync("index.html", "utf8");
  counter += 1;
  console.log(counter);
  res.send(data);
});

app.get("/secondpage.html", (req, res) => {
  const data = fs.readFileSync("secondpage.html", "utf8");
  counter += 1;
  console.log(counter);
  res.send(data);
});

app.listen(3003, () => {
  console.log("is listen on port 3003!");
});
