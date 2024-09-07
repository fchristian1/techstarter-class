// Aufgabe 2: Datei schreiben und Inhalt ändern

// Erstelle eine Node.js-Anwendung, um den Inhalt der Datei "notes.txt" zu ändern. Füge einen
// neuen Text am Ende der Datei hinzu, ohne den vorhandenen Inhalt zu überschreiben.

import fs from "node:fs";
const date = new Date();
const textDate = date.toISOString();
const text = `Hello World! ${textDate}\n`;

// Write to the file asynchronously
fs.appendFile("./notes.txt", text, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File written successfully");
});
