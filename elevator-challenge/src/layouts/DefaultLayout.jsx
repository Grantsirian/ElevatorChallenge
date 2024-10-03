import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Import your CartContext

const DefaultLayout = () => {
    const { state: cartItems } = useContext(CartContext); // Access cart state

    return (
        <>
            <Navbar products={cartItems} /> {/* Pass cart items to Navbar */}
            <Outlet />
            <Footer />
        </>
    );
};

export default DefaultLayout;
