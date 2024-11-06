import React, { useEffect } from "react";
import { useItemsService } from "../../../services/Items.service";
import Button from "../../../components/Button";

function LagerListe({ menu, setMenu, selectedItem, setSelectedItem }) {
    const { items, setItems } = useItemsService();
    const [deleteId, setDeleteId] = React.useState(null);
    useEffect(() => {
        setDeleteId(null);
    }, [menu, items]);
    function editItem(item) {
        setMenu("edit");
        setSelectedItem(item);
    }
    function deleteItem(item) {
        fetch(`http://localhost:5678/api/items/${item.id}`, {
            method: "DELETE",
        }).then(() => {
            setItems(items.filter((i) => i.id !== item.id));
            setDeleteId(null);
        });
    }
    return (
        <>
            <div className="w-full flex flex-col items-center gap-2">
                <div className="flex flex-row w-full p-2">
                    <div className="w-1/5">ArtNr</div>
                    <div className="w-1/5">Name</div>
                    <div className="w-1/5">Preis</div>
                    <div className="w-1/5">Anzahl</div>
                    <div className="w-1/5">Options</div>
                </div>

                {items.map((item) => (
                    <div key={item.id} className="flex flex-row w-full p-2 rounded hover:bg-gray-200">
                        <div className="w-1/5">{item.articleNumber}</div>
                        <div className="w-1/5">{item.name}</div>
                        <div className="w-1/5">{item.price}</div>
                        <div className="w-1/5">{item.quantity}</div>
                        <div className="w-1/5 flex gap-1">
                            <Button onClick={() => editItem(item)}>Edit</Button>
                            {deleteId !== item.id && <Button onClick={() => setDeleteId(item.id)}>Delete</Button>}
                            {deleteId === item.id && (
                                <Button clasName="bg-red-500 text-black" onClick={() => deleteItem(item)}>
                                    Ja
                                </Button>
                            )}
                            {deleteId === item.id && (
                                <Button clasName="bg-green-500 text-black" onClick={() => setDeleteId(null)}>
                                    Nein
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default LagerListe;
