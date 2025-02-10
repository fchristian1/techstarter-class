import React, { useEffect, useState } from "react";

function UserView({ users, loading, error }) {
    const [dots, setDots] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => {
                if (prev.length >= 3) {
                    return "";
                }
                return prev + ".";
            });
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h2 className="text-2xl text-blue-500">Users</h2>
            {loading && <p>Loading{dots}</p>}
            {users.length === 0 && !loading && <p>No users found</p>}
            {
                <ul>
                    {users.map((user) => {
                        return <li key={user.id}>{user.name}</li>;
                    })}
                </ul>
            }
        </>
    );
}

export default UserView;
