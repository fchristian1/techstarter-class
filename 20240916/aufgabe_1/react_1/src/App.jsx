import { useState } from "react";
import "./App.css";
import Headline from "./components/Headline";
import Paragraph from "./components/Paragraph";
const headlineText = "Hello, React!";
const firstText = "This is the first paragraph";
const color1 = "red";
const color2 = "blue";

function App() {
    return (
        <>
            <Headline text={headlineText} color={color1} />
            <Paragraph text={firstText} color={color2} />
        </>
    );
}

export default App;
