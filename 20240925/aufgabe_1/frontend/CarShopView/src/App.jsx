import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import Listing from "./components/Listing";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:3001/api/v1/cars")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);
    return (
        <>
            <div className="flex flex-col items-center ">
                <h1 className="text-3xl">Das ist meine Autohaus App</h1>
                {loading ? <RotatingLines /> : <Listing data={data} />}
            </div>
        </>
    );
}

export default App;
