import { useState } from "react";
import Button from "./Button";

function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h2>Count: {counter}</h2>
            <Button
                text={"Increment"}
                onClick={() => setCounter(counter + 1)}
            />
            <Button
                text={"Decrement"}
                onClick={() => setCounter(counter - 1)}
            />
        </>
    );
}

export default Counter;
