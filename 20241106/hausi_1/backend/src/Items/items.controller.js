import { deleteItemDB, getItemByIdDB, getItemsDB, setItemDB, updateItemDB } from "../services/data.service.js";
import { newItemService } from "./items.service.js";

export async function getAllItemsController(req, res) {
    res.status(200).json(await getItemsDB());
}
export async function getOneItemByIdController(req, res) {
    const id = parseInt(req.params.id);
    const item = await getItemByIdDB(id);
    if (!item) {
        res.status(404).json({
            error: "Item not found",
        });
    }
    res.status(200).json(item);
}
export async function createNewItemController(req, res) {
    const item = newItemService(req.body);
    const { lastInsertRowid } = await setItemDB(item);
    res.status(201).json(await getItemByIdDB(lastInsertRowid));
}
export async function updateItemController(req, res) {
    const id = parseInt(req.params.id);
    const item = await getItemByIdDB(id);
    if (!item) {
        res.status(404).json({
            error: "Item not found",
        });
    }
    if (item.id !== req.body.id) {
        res.status(400).json({
            error: "Id does not match",
        });
    }
    let updateItem = { ...item, ...req.body };
    await updateItemDB(updateItem);
    res.status(200).json(updateItem);
}
export async function deleteItemController(req, res) {
    const id = parseInt(req.params.id);
    let r = await deleteItemDB(id);
    res.status(204).json();
}
