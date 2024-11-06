import express from "express";
import cors from "cors";

let users = [
    {
        id: 1,
        name: "Max",
        email: "max@test.de",
    },
    {
        id: 2,
        name: "Moritz",
        email: "moritz@test.de",
    },
];

const app = express();
app.use(cors());
app.use(express.json());

app.get("/status", (req, res) => {
    res.status(200).json({
        status: "ok",
    });
});

app.get("/users", (req, res) => {
    res.status(200).json(users);
});
app.get("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({
            error: "User not found",
        });
    }
});
app.post("/user", (req, res) => {
    const user = req.body;
    user.id = Math.max(...users.map((user) => user.id)) + 1;
    users.push(user);
    res.status(201).json(user);
});
app.delete("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex >= 0) {
        users.splice(userIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({
            error: "User not found",
        });
    }
});
app.put("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex >= 0) {
        users[userIndex] = { ...users[userIndex], ...req.body };
        res.status(200).json(users[userIndex]);
    } else {
        res.status(404).json({
            error: "User not found",
        });
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
