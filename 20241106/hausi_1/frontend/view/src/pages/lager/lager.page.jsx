import React, { useState } from "react";
import Button from "../../components/Button";
import LagerNew from "./components/lager.new";
import LagerListe from "./components/lager.liste";
import { useItemsService } from "../../services/Items.service";

function LagerPage() {
    const { items, setItems, updateItems, setUpdateItems } = useItemsService();
    const [menu, setMenu] = useState("liste");
    const [selectedItem, setSelectedItem] = useState(null);
    return (
        <>
            <div className="flex gap-2 mt-2">
                <Button active={menu === "liste" ? "true" : "false"} onClick={() => setMenu("liste")}>
                    Liste
                </Button>
                <Button
                    onClick={() => {
                        setMenu("liste");
                        setUpdateItems(!updateItems);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                    </svg>
                </Button>
                <Button active={menu === "neu" ? "true" : "false"} onClick={() => setMenu("neu")}>
                    Neu
                </Button>
            </div>

            {menu === "liste" && <LagerListe menu={menu} setMenu={setMenu} selectedItem={selectedItem} setSelectedItem={setSelectedItem}></LagerListe>}
            {menu === "neu" && <LagerNew setMenu={setMenu}></LagerNew>}
            {menu === "edit" && <LagerNew setMenu={setMenu} editItem={selectedItem}></LagerNew>}
        </>
    );
}

export default LagerPage;
