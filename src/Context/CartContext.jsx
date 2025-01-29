import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);



    const addToCart = (product) => {
        setCart((prevCart) => {

            const existingProduct = prevCart.find((item) => item.id === product.id);

            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, amount: 1 }];
            }
        });
    };



    const removeFromCart = (productId, removeCompletely = true) => {
        setCart((prevCart) => {
            if (removeCompletely) {
                return prevCart.filter((item) => item.id !== productId);
            }

            return prevCart.map((item) =>
                item.id === productId && item.amount > 1
                    ? { ...item, amount: item.amount - 1 }
                    : item
            );
        });
    };


    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
