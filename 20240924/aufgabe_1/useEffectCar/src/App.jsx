import { useState } from "react";
import CarsListView from "./components/CarsListView";
import CarsListViewWithTimer from "./components/CarsListViewWithTimer";

function App() {
    const [menu, setMenu] = useState(0);
    return (
        <>
            <h1>CarsViewApp Aufgabe 1 24.09.2024</h1>
            <button
                className="bg-gray-400 rounded p-1 border border-gray-600 m-1 hover:bg-gray-500"
                onClick={() => setMenu(0)}
            >
                CarsListView
            </button>
            <button
                className="bg-gray-400 rounded p-1 border border-gray-600 m-1 hover:bg-gray-500"
                onClick={() => setMenu(1)}
            >
                CarsListViewWithTimer
            </button>
            {menu == 0 ? <CarsListView /> : <CarsListViewWithTimer />}
        </>
    );
}

export default App;