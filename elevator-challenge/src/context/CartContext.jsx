import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const initialState = [];

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const hasProductId = state.some((product) => product.id === action.productPayload.id);
                if (hasProductId) {
                    return state;
                }

                return [...state, { ...action.productPayload, quantity: 1 }];

            case 'INCREASE':
                return state.map((product) => {
                    if (product.id === action.productPayload.id) {
                        return { ...product, quantity: product.quantity + 1 };
                    }
                    return product;
                });

            case 'DECREASE':
                return state.map((product) => {
                    if (product.id === action.productPayload.id && product.quantity > 1) {
                        return { ...product, quantity: product.quantity - 1 };
                    }
                    return product;
                });

            case 'REMOVE':
                return state.filter((product) => product.id !== action.productPayload.id);

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const cartInfo = { state, dispatch };

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    );
};
