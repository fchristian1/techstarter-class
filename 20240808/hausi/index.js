import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

app.post("/find-value", (req, res) => {
  console.log(req.body);
  const { value } = req.body;
  const result = dataArray.find((element) => element === value) ? true : false;
  res.json({ result });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
