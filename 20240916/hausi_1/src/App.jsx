import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <LoginLogoutButton
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    );
}

export default App;

function LoginLogoutButton({ isLoggedIn, setIsLoggedIn }) {
    return (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
        </button>
    );
}
