import React from "react";

function Button({ href, text }) {
    return (
        <a href={href}>
            <button className="button-primary">{text}</button>
        </a>
    );
}

export default Button;
