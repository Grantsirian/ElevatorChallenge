// src/context/ProductContext.jsx
import { createContext, useReducer } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const initialState = []; // Replace with actual product fetching logic if needed

    const reducer = (state, action) => {
        // Define actions to manage products
        switch (action.type) {
            case 'SET_PRODUCTS':
                return action.payload;
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ProductContext.Provider value={{ products: state, dispatch }}>
            {children}
        </ProductContext.Provider>
    );
};
