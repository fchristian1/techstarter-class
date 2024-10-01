import React from "react";

function Button({ text, onClick }) {
    return (
        <button onClick={onClick} className="button-primary min-w-40">
            {text}
        </button>
    );
}

export default Button;
