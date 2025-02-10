import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const db = new sqlite3.Database("database.db");

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, name TEXT)");
});

app.get("/todos", (req, res) => {
    db.all("SELECT * FROM todos", (err, rows) => {
        if (err) {
            res.status(500).send(err);
        }
        res.send(rows);
    });
});

app.post("/todos/addTodo", (req, res) => {
    const { name } = req.body;
    db.run("INSERT INTO todos (name) VALUES (?)", name, function (err) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).send({ id: this.lastID });
    });
});

app.delete("/todos/all", (req, res) => {
    db.run("DELETE FROM todos", (err) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.send({ message: "All todos deleted" });
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
