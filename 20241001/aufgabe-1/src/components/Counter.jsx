import React, { useState } from "react";
import Button from "./Button";

function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div>
                <h1>Counter: {counter}</h1>
                <Button onClick={() => setCounter(counter + 1)}>
                    Increment
                </Button>
                <Button onClick={() => setCounter(counter - 1)}>
                    Decrement
                </Button>
            </div>
        </>
    );
}

export default Counter;
