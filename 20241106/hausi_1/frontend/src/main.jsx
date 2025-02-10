import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ItemsProvider } from "./services/Items.service.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ItemsProvider>
            <App />
        </ItemsProvider>
    </StrictMode>
);
