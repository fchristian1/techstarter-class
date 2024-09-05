import fs from "node:fs";

let deleteFile = "obsolete.txt";

if (!fs.existsSync(deleteFile)) {
    console.error("File does not exist");
    process.exit(1);
}

fs.unlink(deleteFile, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("File deleted successfully");
});
