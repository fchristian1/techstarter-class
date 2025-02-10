const express = require('express');
const cors = require('cors');
const { PORT } = require('./consts');
const { connectToDatabase, Todo } = require('./database');
require('dotenv').config();
const args = process.argv.slice(2)

const app = express();
const port = PORT
app.use(express.json());
app.use(cors());


// Verbinde zur MongoDB-Datenbank und füge Testdaten hinzu, falls nötig
connectToDatabase();

// API-Routen
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).send('Fehler beim Abrufen der Todos');
    }
});

app.post('/todos', async (req, res) => {
    const { text, isComplete } = req.body;
    if (!text) {
        return res.status(400).send("Todo text cannot be empty");
    }

    try {
        const newTodo = new Todo({ text, isComplete });
        await newTodo.save();
        res.status(201).send('Todo created');
    } catch (err) {
        res.status(500).send('Fehler beim Erstellen eines Todos');
    }
});

app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { text, isComplete } = req.body;

    if (!text) {
        return res.status(400).send("Todo text cannot be empty");
    }

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { text, isComplete }, { new: true });
        if (!updatedTodo) {
            return res.status(404).send('Todo not found');
        }
        res.status(200).send('Todo updated');
    } catch (err) {
        res.status(500).send('Fehler beim Aktualisieren des Todos');
    }
});

app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).send('Todo not found');
        }
        res.status(200).send('Todo deleted');
    } catch (err) {
        res.status(500).send('Fehler beim Löschen des Todos');
    }
});


app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});


module.exports = { app };