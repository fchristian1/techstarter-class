import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(cors());

const data = fs.readFileSync("./src/dataCars.json");

app.get("/api/v1/cars", (req, res) => {
    res.header("Content-Type", "application/json");
    res.send(data);
});

app.listen(3001, () => {
    console.log("app is running on port 3001");
});
