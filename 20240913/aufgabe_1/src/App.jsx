import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Simple from "./components/simple";
import Todo from "./components/todo/todo";

function App() {
    const [menu, setMenu] = useState("simple");

    return (
        <>
            <button onClick={() => setMenu("simple")}>Simple</button>
            <button onClick={() => setMenu("todo")}>Todo</button>
            {menu === "simple" ? <Simple textH1="Hallo Welt!" textP="Dies ist meine erste React-Komponente!" /> : menu === "todo" ? <Todo /> : null}
        </>
    );
}

export default App;
