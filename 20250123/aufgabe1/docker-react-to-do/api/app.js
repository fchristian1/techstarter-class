const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const logger = require('./logger'); // Winston-Logger importieren
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Initialisiere die Datenbank
const db = new sqlite3.Database(':memory:');

// Funktion zur einheitlichen Fehlerbehandlung
function handleError(res, statusCode, message) {
    logger.error(message);
    return res.status(statusCode).send({ error: message });
}

// Erstelle die Tabelle und füge Testdaten ein
db.serialize(() => {
    logger.info('Datenbank wird initialisiert');

    const createTableQuery = `CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL,
        isComplete BOOLEAN NOT NULL
    )`;

    db.run(createTableQuery, (err) => {
        if (err) {
            logger.error('Fehler beim Erstellen der Tabelle todos', { error: err.message });
        } else {
            logger.info('Tabelle todos erfolgreich erstellt');
        }
    });

    const insertTestData = `INSERT INTO todos (text, isComplete) VALUES
        ('Python auffrischen', 0),
        ('JavaScript üben', 0),
        ('React lernen', 0),
        ('Docker kennenlernen', 0)
        `;

    db.run(insertTestData, (err) => {
        if (err) {
            logger.error('Fehler beim Einfügen von Testdaten', { error: err.message });
        } else {
            logger.info('Testdaten erfolgreich eingefügt');
        }
    });
});

// Server herunterfahren
process.on('exit', () => {
    logger.info('Server wird heruntergefahren, schließe Datenbankverbindung');
    db.close();
});

// Swagger-Dokumentation konfigurieren
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Todo API',
            version: '1.0.0',
            description: 'Eine API zum Verwalten von Todos',
        },
        servers: [
            {
                url: 'http://localhost:5000',
            },
        ],
        components: {
            schemas: {
                Todo: {
                    type: 'object',
                    required: ['id', 'text', 'isComplete'],
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'Die ID des Todos',
                        },
                        text: {
                            type: 'string',
                            description: 'Der Text des Todos',
                        },
                        isComplete: {
                            type: 'boolean',
                            description: 'Status, ob das Todo abgeschlossen ist',
                        },
                    },
                    example: {
                        id: 1,
                        text: 'JavaScript üben',
                        isComplete: false,
                    },
                },
            },
        },
    },
    apis: ['./app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Express-Anwendung einrichten
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware zur Protokollierung und Metrik-Erfassung
app.use((req, res, next) => {
    const start = Date.now();

    logger.info(`Incoming request: ${req.method} ${req.url}`, { body: req.body });

    res.on('finish', () => {
        const responseTime = (Date.now() - start) / 1000; // in Sekunden
        logger.info(`Response time: ${responseTime}s`);

        // Alert für lange Antwortzeiten
        if (responseTime > 2) {
            logger.warn(`Hohe Antwortzeit: ${responseTime}s für ${req.method} ${req.url}`);
        }
    });

    next();
});

// SQL-Queries definieren
const selectQuery = `SELECT * FROM todos`;
const insertQuery = `INSERT INTO todos (text, isComplete) VALUES (?, ?)`;
const deleteQuery = `DELETE FROM todos WHERE id = ?`;
const updateQuery = `UPDATE todos SET text = ?, isComplete = ? WHERE id = ?`;

// API-Routen
/**
 * @swagger
 * /:
 *   get:
 *     summary: "Hello World"
 *     description: "Gibt 'Hello World' zurück."
 *     responses:
 *       200:
 *         description: "Erfolgreiche Antwort"
 */
app.get('/', (req, res) => {
    logger.info('Hello World Route aufgerufen');
    res.send("Hello World");
});

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: "Alle Todos abrufen"
 *     responses:
 *       200:
 *         description: "Eine Liste von Todos"
 */
app.get('/todos', (req, res) => {
    db.all(selectQuery, (err, rows) => {
        if (err) {
            return handleError(res, 500, 'Fehler beim Abfragen der Todos');
        }
        logger.info('Todos erfolgreich abgerufen', { count: rows.length });
        res.json(rows);
    });
});

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: "Neues Todo erstellen"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: "Todo erfolgreich erstellt"
 *       400:
 *         description: "Ungültige Anfrage"
 *       500:
 *         description: "Fehler beim Erstellen des Todos"
 */
app.post('/todos', (req, res) => {
    const { text, isComplete } = req.body;

    if (!text) {
        return handleError(res, 400, "Todo text cannot be empty");
    }

    db.run(insertQuery, [text, isComplete], function (err) {
        if (err) {
            return handleError(res, 500, 'Fehler beim Erstellen eines neuen Todos');
        }
        logger.info('Neues Todo erfolgreich erstellt', { todoId: this.lastID, text });
        res.status(201).send('Todo created');
    });
});

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: "Ein Todo löschen"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID des zu löschenden Todos"
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Todo erfolgreich gelöscht"
 *       404:
 *         description: "Todo nicht gefunden"
 *       500:
 *         description: "Fehler beim Löschen des Todos"
 */
app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;

    db.run(deleteQuery, [id], function (err) {
        if (err) {
            return handleError(res, 500, `Fehler beim Löschen des Todos mit ID ${id}`);
        } else if (this.changes > 0) {
            logger.info(`Todo mit ID ${id} erfolgreich gelöscht`);
            res.status(200).send('Todo deleted');
        } else {
            return handleError(res, 404, `Todo mit ID ${id} nicht gefunden`);
        }
    });
});

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: "Ein Todo aktualisieren"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: "ID des zu aktualisierenden Todos"
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: "Todo erfolgreich aktualisiert"
 *       404:
 *         description: "Todo nicht gefunden"
 *       400:
 *         description: "Ungültige Anfrage"
 *       500:
 *         description: "Fehler beim Aktualisieren des Todos"
 */
app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { text, isComplete } = req.body;

    if (!text) {
        return handleError(res, 400, "Todo text cannot be empty");
    }

    db.run(updateQuery, [text, isComplete, id], function (err) {
        if (err) {
            return handleError(res, 500, `Fehler beim Aktualisieren des Todos mit ID ${id}`);
        } else if (this.changes > 0) {
            logger.info(`Todo mit ID ${id} erfolgreich aktualisiert`, { text, isComplete });
            res.status(200).send('Todo updated');
        } else {
            return handleError(res, 404, `Todo mit ID ${id} nicht gefunden`);
        }
    });
});


// Server starten
app.listen(port, () => {
    logger.info(`Server läuft auf http://localhost:${port}`);
});

module.exports = { app };