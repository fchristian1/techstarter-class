import React from "react";
//sollten mindestens folgende Informationen dargestellt werden:
// id
// model
// brand
// year
// price
// image (falls verfügbar)
function ModelView({ selectedModel }) {
    return (
        <div className="w-1/2">
            {selectedModel.id === undefined ? (
                <>
                    <p className="text-center text-lg font-semibold text-red-500">
                        Please select a model
                    </p>
                </>
            ) : (
                <div className="flex flex-col rounded border border-gray-500 border-solid p-1 gap-1">
                    <div className="">
                        <h2 className="bg-gray-400 rounded p-1">Car Details</h2>

                        <div className="flex items-center justify-between p-2.5">
                            <div className="flex items-center">
                                <img
                                    className="w-12 h-12 rounded-full object-cover"
                                    src={selectedModel.image}
                                    alt={selectedModel.model}
                                />
                                <div className="ml-2">
                                    <h3 className="text-lg font-semibold">
                                        {selectedModel.model}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {selectedModel.make}
                                    </p>
                                </div>
                            </div>
                            <p className="text-lg font-semibold text-gray-700">
                                ${selectedModel.price}
                            </p>
                        </div>
                        <div className="p-2.5">
                            <p>
                                <span className="font-semibold">ID:</span>{" "}
                                {selectedModel.id}
                            </p>
                            <p>
                                <span className="font-semibold">Brand:</span>{" "}
                                {selectedModel.make}
                            </p>
                            <p>
                                <span className="font-semibold">Year:</span>{" "}
                                {selectedModel.year}
                            </p>
                            <p>
                                <span className="font-semibold">Price:</span> $
                                {selectedModel.price}
                            </p>
                            <p>
                                <span className="font-semibold">Model:</span>{" "}
                                {selectedModel.model}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ModelView;
