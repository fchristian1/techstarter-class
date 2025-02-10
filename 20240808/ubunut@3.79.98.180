import express from "express";
import cors from "cors";

const PORT = 3000;
const app = express();

const teilnehmer = [
  { name: "Marius" },
  { name: "Ilona" },
  { name: "Timo" },
  { name: "Katharina" },
];

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/teilnehmer", (req, res) => {
  res.json({ teilnehmer });
});
app.post("/teilnehmer", (req, res) => {
  const newTeilnehmer = req.body;

  teilnehmer.push(newTeilnehmer);
  res.json({ newTeilnehmer });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
