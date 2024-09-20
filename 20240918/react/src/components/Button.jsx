import { useState } from "react";

function Button() {
    const [state, setState] = useState(false);
    return (
        <button onClick={() => setState((state) => !state)}>
            {state ? "An" : "Aus"}
        </button>
    );
}

export default Button;
