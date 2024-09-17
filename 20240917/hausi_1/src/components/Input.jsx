import { useState } from "react";

function Input() {
    const [text, setText] = useState("");
    return (
        <>
            <div>
                <input type="text" onChange={(e) => setText(e.target.value)} />
            </div>
            <div>{text}</div>
        </>
    );
}

export default Input;
