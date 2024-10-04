import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const DefaultLayout = () => {
    const { state: cartItems } = useContext(CartContext);

    return (
        <>
            <Navbar products={cartItems} />
            <Outlet />
            <Footer />
        </>
    );
};

export default DefaultLayout;
