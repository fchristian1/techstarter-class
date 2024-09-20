import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    );
}

export default Counter;
