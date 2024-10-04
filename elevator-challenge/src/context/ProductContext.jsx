import { createContext, useReducer } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const initialState = [];

    const reducer = (state, action) => {
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
