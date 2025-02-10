// Aufgabe 1: Datei lesen und Inhalt ausgeben.

// Erstelle eine Node.js-Anwendung, um den Inhalt einer Datei mit dem Namen "text.txt" zu lesen
// und ihn in der Konsole auszugeben.

import fs from "node:fs";

fs.readFile("./text.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
