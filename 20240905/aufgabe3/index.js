// Aufgabe 3: Datei umbenennen und verschieben

// Erstelle eine Node.js-Anwendung, um eine Datei mit dem Namen "oldfile.txt" in "newfile.txt"
// umzubenennen und sie dann in einen neuen Ordner mit dem Namen "archive" zu verschieben.

import fs from "node:fs";

let oldfile = "oldfile.txt";
let newfile = "newfile.txt";
let archive = "archive";

if (!fs.existsSync(archive)) {
    fs.mkdirSync(archive);
}

if (!fs.existsSync(oldfile)) {
    console.error("File does not exist");
    process.exit(1);
}

fs.rename(oldfile, newfile, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("File renamed successfully");
});

// move newfile to archive/newfile+timestamp.txt
let timestamp = new Date().toISOString().replace(/:/g, "-");
let newfileArchive = `${archive}/${newfile.replace(".txt", `-${timestamp}.txt`)}`;

fs.rename(newfile, newfileArchive, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File moved to archive successfully");
});
