import { useState } from "react";

function Main() {
    const [text, setText] = useState("Hallo von Main");
    return (
        <>
            <div style={{ border: "1px solid black" }}>{text}</div>
            <Sec text={text} setText={setText} />
        </>
    );
}

function Sec({ text, setText }) {
    return (
        <>
            <div style={{ border: "1px solid red" }}>
                <input type="text" onChange={(e) => setText(e.target.value)} />
            </div>
        </>
    );
}

export default Main;
