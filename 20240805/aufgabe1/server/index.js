const express = require("express");
const path = require("path");
const fs = require("node:fs");

const app = express();

const file = JSON.parse(
  fs.readFileSync(path.join(__dirname, "MOCK_DATA.json"), {
    encoding: "utf8",
    flag: "r",
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/names", (req, res) => {
  res.send(file);
});
app.get("/randomname", (req, res) => {
  let index = Math.floor(Math.random() * file.length);
  let name = file[index].name;
  res.send({ name });
});

function listenServer() {
  console.log("Server is listen on http://localhost:3003");
}

app.listen(3003, listenServer);
