const express = require("express");

const PORT = 3003;

const app = express();

const middelware = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().toLocaleString("de");
  console.log(method, url, date);
  next();
};

app.use(middelware);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.all("**", (req, res) => {
  res.send("Not found 404");
});
app.listen(PORT, () => {
  console.log(`app ist listen on 'http://localhost:${PORT}'`);
});
