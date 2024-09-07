// Aufgabe 4: Datei löschen

// Erstelle eine Node.js-Anwendung, um eine Datei mit dem Namen "obsolete.txt" zu löschen. Stelle
// sicher, dass die Anwendung eine Fehlermeldung ausgibt, wenn die Datei nicht existiert.

import fs from "fs";

let deleteFile = "obsolete.txt";

if (!fs.existsSync(deleteFile)) {
    console.error("File does not exist");
    process.exit(1);
}

fs.promises.unlink(deleteFile, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("File deleted successfully");
});
