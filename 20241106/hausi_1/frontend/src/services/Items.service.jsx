import React, { createContext, useContext, useEffect, useLayoutEffect } from "react";

const ItemsServiceContext = createContext();
export function ItemsProvider({ children }) {
    const [items, setItems] = React.useState([]);
    const [updateItems, setUpdateItems] = React.useState(false);
    useEffect(() => {
        fetch("http://localhost:5678/api/items")
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, [, updateItems]);
    useLayoutEffect(() => {}, [items]);
    return <ItemsServiceContext.Provider value={{ items, setItems, updateItems, setUpdateItems }}>{children}</ItemsServiceContext.Provider>;
}

export function useItemsService() {
    return useContext(ItemsServiceContext);
}
