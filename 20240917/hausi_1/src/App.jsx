import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Main from "./components/Props";
import List from "./components/List";

function App() {
    return (
        <>
            <div>
                <h1>Aufgabe 1</h1>
                <Button />
            </div>
            <div>
                <h1>Aufgabe 2</h1>
                <Input />
            </div>
            <div>
                <h1>Aufgabe 3</h1>
                <Main />
            </div>
            <div>
                <h1>Aufgabe 4</h1>
                <List />
            </div>
        </>
    );
}

export default App;
