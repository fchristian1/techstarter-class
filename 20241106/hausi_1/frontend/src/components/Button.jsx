import React from "react";

function Button({ children, onClick, active, clasName }) {
    return (
        <button
            active={active}
            onClick={onClick}
            className={
                clasName +
                " px-2 py-1 border border-gray-700 rounded " +
                ((active === "true" ? true : false) ? " bg-gray-300 text-gray-700 " : " bg-gray-700 text-gray-300 ")
            }
        >
            {children}
        </button>
    );
}

export default Button;
