const express = require("express");

const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(404).send({ error: "no right postdata" });
  }
  if (username === "gast" && password === "gast") {
    return res.send({ message: "your are logged in as gast" });
  }
  return res.status(401).send({ error: "not authorized" });
});

app.listen(3003, () => {
  console.log("server is listen on 'http://localhost:3003'");
});
