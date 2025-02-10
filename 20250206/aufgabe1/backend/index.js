const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const fs = require("fs");
const pool = new Pool({
    user: process.env.POSTGRES_USER ?? "myuser",
    host: process.env.POSTGRES_HOST ?? "postgres",
    database: "mydb",
    password: process.env.POSTGRES_PASSWORD ?? "mypassword",
    port: process.env.POSTGRES_PORT ?? 5432,
});

//init db tables
//create  TABEL items (id, name) if not exists
const initDb = async () => {
    const sql = "CREATE TABLE IF NOT EXISTS items (id SERIAL PRIMARY KEY, name TEXT);";
    try {

        await pool.query(sql);
    } catch (err) {
        console.log(err);
    }
    console.log("Initialized db");
}
initDb();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/health", (req, res) => {
    res.send("OK");
});
app.get("/api/data", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM items;");
        res.json(result.rows);
    } catch (err) {
        console.log(err);
    }
});
app.post("/api/data", async (req, res) => {
    try {
        const { name } = req.body;
        await pool.query("INSERT INTO items (name) VALUES ($1)", [name]);
        res.send("Inserted!");
    } catch (err) {
        console.log(err);
    }
});
app.listen(3000, () => console.log("API running on port 3000"));