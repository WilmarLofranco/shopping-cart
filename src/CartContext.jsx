// CartContext.jsx

import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prev) => [...prev, product])
    }

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };
    
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }