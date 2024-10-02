import React, { useState } from "react";

function Button() {
    const [clicked, setClicked] = useState(false);

    return (
        <button
            className={
                "bg-gray-100 border border-gray-300 rounded-md px-2 py-1 m-2 hover:bg-gray-300 *:"
            }
            onClick={() => setClicked(true)}
        >
            {clicked ? "Clicked!" : "Click me"}
        </button>
    );
}

export default Button;
