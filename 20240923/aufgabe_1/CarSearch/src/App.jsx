import { useEffect, useState } from "react";
import InputSearch from "./components/inputSearch";
import ModelListView from "./components/modelListView";
import ModelView from "./components/modelView";

function App() {
    const [carData, setCarData] = useState([]);
    const [searchInput, setSearchInput] = useState({});
    const [selectedModel, setSelectedModel] = useState({});
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => console.log(carData), [carData]);
    useEffect(() => {
        if (searchInput != "") {
            setFilteredData(
                carData.filter((car) =>
                    car.model.toLowerCase().includes(searchInput.toLowerCase())
                )
            );
        } else {
            setFilteredData([]);
            setSelectedModel({});
        }
    }, [searchInput]);
    if (carData.length === 0)
        (async () => {
            setCarData(
                await (
                    await fetch("https://freetestapi.com/api/v1/cars")
                ).json()
            );
        })();
    function selectAllModels() {
        setFilteredData(carData);
        setSelectedModel({});
    }
    return (
        <div className="flex flex-col gap-1 m-1">
            <InputSearch
                selectAllModels={selectAllModels}
                setSearchInput={setSearchInput}
            />
            <div className="flex gap-1 w-full">
                <ModelListView
                    filteredData={filteredData}
                    selectedModel={selectedModel}
                    setSelectedModel={setSelectedModel}
                />
                <ModelView selectedModel={selectedModel} />
            </div>
        </div>
    );
}

export default App;
