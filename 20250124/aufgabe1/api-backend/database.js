
const mongoose = require('mongoose');
const { MONGO_URI } = require('./consts');
// Datenbankschema für "todos"
const todoSchema = new mongoose.Schema({
    text: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
});

const Todo = mongoose.model('Todo', todoSchema);

// MongoDB-Verbindung herstellen
async function connectToDatabase() {
    console.log('Verbinde mit MongoDB...');
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Erfolgreich mit MongoDB verbunden');

        // Testdaten einfügen, falls noch keine Todos vorhanden sind
        const count = await Todo.countDocuments();
        if (count === 0) {
            console.log('Keine Todos gefunden. Testdaten werden hinzugefügt.');

            // Testdaten
            const todos = [
                { text: 'Python auffrischen', isComplete: false },
                { text: 'JavaScript üben', isComplete: false },
                { text: 'React lernen', isComplete: false },
            ];

            try {
                await Todo.insertMany(todos);
                console.log('Testdaten erfolgreich hinzugefügt');
            } catch (insertError) {
                console.error('Fehler beim Einfügen der Testdaten:', insertError.message);
            }
        }
    } catch (err) {
        console.error('Fehler beim Verbinden mit MongoDB:', err.message);
        process.exit(1);
    }
}

// Verbindung schließen, wenn der Prozess beendet wird
process.on('SIGINT', async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB-Verbindung geschlossen');
        process.exit(0);
    } catch (err) {
        console.error('Fehler beim Schließen der MongoDB-Verbindung:', err.message);
        process.exit(1);
    }
});

module.exports = { connectToDatabase, Todo };