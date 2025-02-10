import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import TwinInput from "./components/TwinInput";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Aufgabe 1</h1>
            <Button />
            <h1>Aufgabe 2</h1>
            <Counter />
            <h1>Aufgabe 3</h1>
            <TwinInput />
        </>
    );
}

export default App;
