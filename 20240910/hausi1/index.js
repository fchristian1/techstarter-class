const express = require("express");

async function log(req, res, next) {
    const date = new Date();
    console.log(req.method, req.url, date);
}

const app = express();
app.use(log);
const user = ["user1", "user2", "user3"];

app.get("/user", (req, res) => {
    res.json(user);
});

app.listen(3003, () => {
    console.log("api is running on port 3000");
});
