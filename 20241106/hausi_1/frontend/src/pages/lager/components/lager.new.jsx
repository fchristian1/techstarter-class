import React, { useState } from "react";
import Button from "../../../components/Button";
import { useItemsService } from "../../../services/Items.service";

function LagerNew({ editItem, setMenu }) {
    const { items, setItems } = useItemsService();
    const [newItem, setNewItem] = useState(editItem ?? { name: "", price: 0, quantity: 0 });
    async function updateItem(item) {
        let res = await fetch(`http://localhost:5678/api/items/${item.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        });
        let data = await res.json();
        setItems(items.map((i) => (i.id === item.id ? data : i)));
        setMenu("liste");
    }
    async function createItem(item) {
        if (newItem.name.trim() == "") {
            return;
        }
        let res = await fetch(`http://localhost:5678/api/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        });
        let data = await res.json();
        setItems([...items, data]);
        setMenu("liste");
    }
    return (
        <>
            <div>{editItem ? "Bearbeiten" : "Neu erstellen"}</div>
            <div className="flex flex-col">
                <label>Artikelnummer</label>
                <input
                    value={newItem.articleNumber}
                    onChange={(e) => setNewItem({ ...newItem, articleNumber: e.target.value })}
                    className="p-2 border border-gray-700 rounded"
                    type="text"
                ></input>
                <label>Name</label>
                <input
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    className="p-2 border border-gray-700 rounded"
                    type="text"
                ></input>
                <label>Preis</label>
                <input
                    value={newItem.price}
                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                    className="p-2 border border-gray-700 rounded"
                    type="number"
                />
                <label>Anzahl</label>
                <input
                    value={newItem.quantity}
                    onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
                    className="p-2 border border-gray-700 rounded"
                    type="number"
                />
            </div>
            <div className="mt-2 flex gap-1">
                {editItem && <Button onClick={() => updateItem(newItem)}>Speichern</Button>}
                {!editItem && <Button onClick={() => createItem(newItem)}>Neu</Button>}
                <Button onClick={() => setMenu("liste")}>Abbrechen</Button>
            </div>
        </>
    );
}

export default LagerNew;
