import React, { useState } from "react";

function Button() {
    const [clicked, setClicked] = useState(false);

    return (
        <button onClick={() => setClicked(true)}>
            {clicked ? "Clicked!" : "Click me"}
        </button>
    );
}

export default Button;
