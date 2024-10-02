import React, { useEffect, useState } from "react";

function User() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://api.example.com/user")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, []);

    if (!user) return <div>Loading...</div>;

    return <div>{user.name}</div>;
}

export default User;
