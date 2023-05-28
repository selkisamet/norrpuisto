import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [deletedProducts, setDeletedProducts] = useState([]);

    useEffect(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        const storedDeletedProducts = localStorage.getItem("deletedProducts");

        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }

        if (storedDeletedProducts) {
            setDeletedProducts(JSON.parse(storedDeletedProducts));
        }
    }, []);

    const addToCart = (item) => {
        const updatedItems = [...cartItems];
        const existingItemIndex = updatedItems.findIndex((product) => product.id === item.id);

        if (existingItemIndex !== -1) {
            updatedItems[existingItemIndex].quantity += 1;
        } else {
            updatedItems.push({ ...item, quantity: 1 });
        }

        setCartItems(updatedItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    };

    const removeCart = (productItem) => {
        const updatedItems = cartItems.map((product) =>
            product.id === productItem.id ? { ...product, quantity: product.quantity - 1 } : product
        );

        const filteredItems = updatedItems.filter((product) => product.quantity > 0);

        setCartItems(filteredItems);
        setDeletedProducts([...deletedProducts, productItem]);
        localStorage.setItem("cartItems", JSON.stringify(filteredItems));
        localStorage.setItem("deletedProducts", JSON.stringify([...deletedProducts, productItem]));
    };

    const unDeleteCart = () => {
        const updatedItems = [...cartItems];

        deletedProducts.forEach((deletedItem) => {
            const existingItemIndex = updatedItems.findIndex((item) => item.id === deletedItem.id);

            if (existingItemIndex !== -1) {
                updatedItems[existingItemIndex].quantity += 1;
            } else {
                updatedItems.push({ ...deletedItem, quantity: 1 });
            }
        });

        setCartItems(updatedItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        localStorage.setItem("deletedProducts", JSON.stringify([]));
        setDeletedProducts([]);
    };

    const getTotalItemCount = () => {
        return cartItems.reduce((total, product) => total + product.quantity, 0);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const cartContextValue = {
        cartItems,
        addToCart,
        removeCart,
        deletedProducts,
        setDeletedProducts,
        unDeleteCart,
        getTotalItemCount,
        getTotalPrice,
    };

    return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};
