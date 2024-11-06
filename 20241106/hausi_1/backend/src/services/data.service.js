import { DatabaseSync } from "node:sqlite";
import fs from "fs";

if (!fs.existsSync("./data")) {
    fs.mkdirSync("./data");
}
const testdata = [
    {
        name: "Apple",
        quantity: 100,
        price: 0.5,
        articleNumber: "123",
    },
    {
        name: "Banana",
        quantity: 200,
        price: 0.2,
        articleNumber: "124",
    },
    {
        name: "Orange",
        quantity: 50,
        price: 0.3,
        articleNumber: "125",
    },
];
const db = new DatabaseSync("./data/db.sqlite");
db.exec(`
    CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY,
        name TEXT,
        quantity INTEGER,
        price REAL,
        articleNumber TEXT
        )
    `);
getItemsDB().then((items) => {
    if (items.length === 0) {
        testdata.forEach(async (item) => {
            await setItemDB(item);
        });
    }
});
export async function getItemsDB() {
    let query = db.prepare("SELECT * FROM items");
    return query.all().length > 0 ? query.all() : [];
}
export async function getItemByIdDB(id) {
    let query = db.prepare(`SELECT * FROM items WHERE id = ${id}`);
    return query.get();
}
export async function setItemDB(item) {
    let query = db.prepare(
        `INSERT INTO items (name, quantity, price, articleNumber) VALUES ('${item.name}', ${item.quantity}, ${item.price}, '${item.articleNumber}')`
    );
    return query.run();
}
export async function updateItemDB(item) {
    let query = db.prepare(
        `UPDATE items SET name = '${item.name}', quantity = ${item.quantity}, price = ${item.price}, articleNumber = '${item.articleNumber}' WHERE id = ${item.id}`
    );
    return query.run();
}
export async function deleteItemDB(id) {
    let query = db.prepare(`DELETE FROM items WHERE id = ${id}`);
    return query.run();
}
