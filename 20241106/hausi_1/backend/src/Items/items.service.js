export function newItemService({ name, articleNumber = "", price = 0, quantity = 0 }) {
    if (!name) {
        throw new Error("name is required");
    }
    let newItem = {
        name,
        articleNumber,
        price,
        quantity,
    };
    return newItem;
}
