import { createContext, useReducer } from "react";

export const CartContext = createContext();
export const Context = (props) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const tempstate = state.filter((item) => action.productPayload.id === item.id);
                if (tempstate.length > 0) {
                    return state
                }
                return [...state, action.productPayload]
                break;

            default:
                return state;
                break;
        }
    }
    const [state, dispatch] = useReducer(reducer, [])
    const cartInfo = { state, dispatch };
    return <CartContext.Provider value={cartInfo}>
        {props.children}
    </CartContext.Provider>
}