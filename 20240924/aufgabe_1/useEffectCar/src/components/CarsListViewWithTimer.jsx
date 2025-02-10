import React, { useEffect } from "react";
import { DNA } from "react-loader-spinner";

function CarsListViewWithTimer() {
    const [cars, setCars] = React.useState([]);
    useEffect(() => {
        setTimeout(() => {
            fetch("https://freetestapi.com/api/v1/cars?limit=15")
                .then((response) => response.json())
                .then((data) => setCars(data));
        }, 5000);
    }, []);
    return (
        <>
            <h2>Cars List View</h2>
            <ul>
                {cars.length === 0 && (
                    <>
                        <li className="text-red-600">Cars Loading in 5s...</li>
                        <div className="flex flex-row">
                            <DNA />
                            <DNA />
                        </div>
                    </>
                )}
                {cars.map((car) => (
                    <li key={car.id}>
                        {car.make} {car.model}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CarsListViewWithTimer;
