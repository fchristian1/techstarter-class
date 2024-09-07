import express from "express";

const app = express();

var data = ["apple", "banana", "cherry", "date", "fig", "grape"];

app.get("/data/:idx", (req, res) => {
    const idx = parseInt(req.params.idx);
    if (idx < data.length) {
        res.send(data[idx]);
    } else {
        res.send("Invalid index");
    }
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
