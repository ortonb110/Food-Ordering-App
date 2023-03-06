import { createContext } from "react";

 const cartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    remove: (id) => {}
});

export default cartContext;