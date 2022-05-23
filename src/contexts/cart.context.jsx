import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
    if (existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id 
                ? {...cartItem, quantity: cartItem.quantity + 1} 
                : {...cartItem}
        )
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    if (existingCartItem && existingCartItem.quantity > 1) {
        return cartItems.map((cartItem) => 
            cartItem.id === cartItemToRemove.id 
                ? {...cartItem, quantity: cartItem.quantity - 1} 
                : {...cartItem}
        );
    } 
    return cartItems.filter(item => item.id !== cartItemToRemove.id);
};

const deleteProduct = (cartItems, productToDelete) => {
    return cartItems.filter(item => item.id !== productToDelete.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    deleteProductFromCart: () => {},
    totalQuantity: 0,
    totalPrice: 0
});

export const CartProvider = ({ children } ) => {
    const [isCartOpen, setIsCartOpen] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalQuantity(cartItems.reduce((total, currentItem) => total + currentItem.quantity,0));  
    },[cartItems])

    useEffect(() => {
        setTotalPrice(cartItems.reduce((total, currentItem) => total + (currentItem.price * currentItem.quantity), 0));
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const deleteProductFromCart = (productToDelete) => {
        setCartItems(deleteProduct(cartItems, productToDelete));
    }

    const value = {
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        removeItemFromCart, 
        deleteProductFromCart, 
        cartItems, 
        totalQuantity, 
        totalPrice
    }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )

};