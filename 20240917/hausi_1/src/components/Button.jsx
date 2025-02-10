import { useState } from "react";

function Button() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>{count}</div>
            <div>
                <button onClick={() => setCount(count + 1)}> Increment</button>
            </div>
        </>
    );
}
export default Button;
