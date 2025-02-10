import Router from "express";
import { createNewItemController, deleteItemController, getAllItemsController, getOneItemByIdController, updateItemController } from "./items.controller.js";

const router = Router();

router.get("/", getAllItemsController);
router.get("/:id", getOneItemByIdController);
router.post("/", createNewItemController);
router.put("/:id", updateItemController);
router.delete("/:id", deleteItemController);

export default router;
