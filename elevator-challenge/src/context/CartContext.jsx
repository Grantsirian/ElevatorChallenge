import { createContext, useReducer } from "react";

// Create CartContext
export const CartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
    const initialState = []; // Initial state for the cart

    // Define reducer function
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const hasProductId = state.some((product) => product.id === action.productPayload.id);
                if (hasProductId) {
                    return state; // Don't add if it already exists
                }
                // Add product with quantity of 1 by default
                return [...state, { ...action.productPayload, quantity: 1 }];

            case 'INCREASE':
                return state.map((product) => {
                    if (product.id === action.productPayload.id) {
                        return { ...product, quantity: product.quantity + 1 }; // Increase quantity
                    }
                    return product;
                });

            case 'DECREASE':
                return state.map((product) => {
                    if (product.id === action.productPayload.id && product.quantity > 1) {
                        return { ...product, quantity: product.quantity - 1 }; // Decrease quantity if more than 1
                    }
                    return product;
                });

            case 'REMOVE':
                return state.filter((product) => product.id !== action.productPayload.id); // Remove product

            default:
                return state; // Return current state for unknown actions
        }
    };

    // Set up useReducer with the initial state and reducer function
    const [state, dispatch] = useReducer(reducer, initialState);
    
    // Create cart info object to provide
    const cartInfo = { state, dispatch };

    return (
        <CartContext.Provider value={cartInfo}>
            {children} {/* Render children components */}
        </CartContext.Provider>
    );
};
