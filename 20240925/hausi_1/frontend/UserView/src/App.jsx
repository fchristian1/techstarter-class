import { useEffect, useState } from "react";
import UserView from "./components/UserView";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3100/api/v1/users")
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setUsers(data);
            })
            .catch((error) => setError(error));
    }, []);
    return (
        <>
            <h1 className="text-4xl text-orange-500 underline">User View</h1>
            {error && <p className="text-red-500">Error: {error.message}</p>}
            {!error && <UserView users={users} loading={loading} />}
        </>
    );
}

export default App;
