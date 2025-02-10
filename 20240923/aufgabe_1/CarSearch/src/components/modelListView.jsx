import React from "react";

function ModelListView({ filteredData, selectedModel, setSelectedModel }) {
    return (
        <div className="w-1/2">
            {filteredData.length === 0 && (
                <>
                    <p className="text-center text-lg font-semibold text-red-500">
                        Please search for a model
                    </p>
                </>
            )}
            {filteredData.length > 0 && (
                <div className="flex flex-col rounded border border-gray-500 border-solid p-1 gap-1">
                    <h2 className="bg-gray-400 rounded p-1">CarList</h2>
                    {filteredData.map((car) => (
                        <div
                            key={car.id}
                            onClick={() => setSelectedModel(car)}
                            className={
                                "rounded border border-gray-500 border-solid cursor-pointer " +
                                (selectedModel?.id == car?.id
                                    ? "bg-orange-300"
                                    : "hover:bg-gray-200 ")
                            }
                        >
                            <div className="flex items-center justify-between p-2.5">
                                <div className="flex items-center">
                                    <img
                                        className="w-12 h-12 rounded-full object-cover"
                                        src={car.image}
                                        alt={car.model}
                                    />
                                    <div className="ml-2">
                                        <h3 className="text-lg font-semibold">
                                            {car.model}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {car.make}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold text-gray-700">
                                    ${car.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ModelListView;
