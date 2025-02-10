import React from "react";

function Listing({ data }) {
    const [activeId, setActiveId] = React.useState(null);
    return (
        <ul className="text-sm">
            {data.map((item) => (
                <li
                    key={item.index}
                    className={
                        "border m-1 p-1 cursor-pointer" +
                        " " +
                        (activeId === item.id
                            ? "bg-yellow-100"
                            : "hover:bg-yellow-50")
                    }
                    onClick={() => setActiveId(item.id)}
                >
                    <div className="inline-block font-medium">
                        {item.make} {item.model}
                    </div>
                    ,{" "}
                    <div className="inline-block font-medium">{item.year}</div>,
                    <br />
                    <div className="inline-block font-medium">
                        Austattung:{" "}
                    </div>{" "}
                    {item.features.join(", ")},<br />
                    <div className="inline-block font-medium">Preis: </div>{" "}
                    {item.price}€
                </li>
            ))}
        </ul>
    );
}

export default Listing;
