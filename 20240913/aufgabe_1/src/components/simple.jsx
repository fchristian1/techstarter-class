import { useState } from "react";

function Simple(props) {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>{props.textH1}</h1>
            <p>{props.textP}</p>
            {count % 2 === 0 ? <p>Counter gerade: {count}</p> : <p>Counter ungerade: {count}</p>}
            <button onClick={() => setCount(count + 1)}>erhöhen</button>
        </>
    );
}

export default Simple;
