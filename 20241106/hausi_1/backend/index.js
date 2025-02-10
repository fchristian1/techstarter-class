import express from "express";
import cors from "cors";
import itemsRouter from "./src/Items/items.router.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/items", itemsRouter);

app.get("/status", (req, res) => {
    res.status(200).json({
        status: "ok",
    });
});

app.listen(5678, () => {
    console.log("Server is running on port 5678");
});
