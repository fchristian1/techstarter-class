import React, { useState } from "react";
import Button from "./components/Button";
import Greeting from "./components/Greeting";
import User from "./components/User";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center mt-8">
            <h1>Hausis vom 02.10.2024</h1>
            <h2>Aufgabe 1</h2>
            <Greeting name="Max" />
            <h2>Aufgabe 2</h2>
            <Button />
            <h2>Aufgabe 3</h2>
            <User />
            <h2>Aufgabe 4</h2>
            <Toggle />
        </div>
    );
}

export default App;
