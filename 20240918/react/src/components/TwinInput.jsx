import { useState } from "react";

function TwinInput() {
    const [value, setValue] = useState("");
    return (
        <div>
            <input
                type="text"
                value={value}
                onInput={(e) => setValue(e.target.value)}
            />
            <input
                type="text"
                value={value}
                onInput={(e) => setValue(e.target.value)}
            />
        </div>
    );
}

export default TwinInput;
