import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/api/v1/users", (req, res) => {
    setTimeout(() => {
        res.json([
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Doe" },
            { id: 3, name: "Alice" },
            { id: 4, name: "Bob" },
            { id: 5, name: "Charlie Brown" },
        ]);
    }, 2000);
});

app.listen(3100, () => {
    console.log("Server is running on port 3100");
});
