import cartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
    item: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if(action.type ==='ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}


const CartProvider = (props) =>{

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item)=> {
        dispatchCartAction({type: "ADD", item: item});
    }

    const removeHandler = (id) => {

    }

    const cart = {
        items: cartState.item,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeHandler
    }

    return(
        <cartContext.Provider value={cart}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartProvider;