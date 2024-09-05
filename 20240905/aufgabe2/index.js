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
