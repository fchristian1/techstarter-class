const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
const fs = require('fs');
const path = require('path');

// Erstelle das logs-Verzeichnis, wenn es nicht existiert
const logDirectory = path.join(__dirname, 'logs');
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

// Lösche Log-Dateien, die älter als 5 Tage sind
function clearOldLogs(directory) {
    const files = fs.readdirSync(directory);
    const now = Date.now();
    const fiveDaysInMs = 5 * 24 * 60 * 60 * 1000; // 5 Tage in Millisekunden

    files.forEach((file) => {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);
        const fileAge = now - stats.mtimeMs;

        if (fileAge > fiveDaysInMs) {
            fs.unlinkSync(filePath); // Lösche die Datei
            console.log(`Deleted old log file: ${file}`);
        }
    });
}

// Alte Logs beim Start der Anwendung löschen
clearOldLogs(logDirectory);

// Winston Logger-Konfiguration
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat
    ),
    transports: [
        new transports.Console(), // Logs in die Konsole
        new transports.File({ filename: path.join(logDirectory, 'error.log'), level: 'error' }), // Nur Fehler in error.log
        new transports.File({ filename: path.join(logDirectory, 'app.log') })
    ]
});

// Beispiel-Logs
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');

module.exports = logger;
