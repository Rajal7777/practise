import { createContext, useState, useContext, useEffect } from "react";
import { products } from "../data/product";
import type { CartContextType, CartItem } from "../types";



//create cart context
const CartContext = createContext<CartContextType | undefined>(undefined);


//consume context
export default function CartProvider({ children }: { children: React.ReactNode; }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [cartTotal, setCartTotal] = useState<number>(0);



    const cartProducts = products.filter((product) => {
        const cartItem = cart.find(
            (item) => item.productId === product.id
        );
        console.log(cartItem);
        return cartItem;
    }).map((product) => {
        const cartItem = cart.find(
            (item) => item.productId === product.id
        );

        return {
            ...product,
            quantity: cartItem!.quantity,
        };
    });

    useEffect(() => {
        const total = cartProducts.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);
        setCartTotal(total);
    }, [cartProducts]);

    //add item to cart
    function addToCart(productId: number) {
        setCart((prevCartItems: CartItem[]) => {
            const existingCartItem = prevCartItems.find(
                (item: CartItem) => item.productId === productId,
            );
            if (existingCartItem) {
                // If the item already exists in the cart, increase the quantity
                return prevCartItems.map((item: CartItem) =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            } else {
                return [...prevCartItems, { productId, quantity: 1 }];
            }
        });
    }

    //remove item
    function removeFromCart(id: number) {
        setCart((prevCart: CartItem[]) => {
            const existing = prevCart.find((item) => item.productId === id);
            if (!existing) return prevCart;
            if (existing.quantity === 1) {
                return prevCart.filter((item) => item.productId !== id);
            }
            return prevCart.map((item) =>
                item.productId === id ? { ...item, quantity: item.quantity - 1 } : item,
            );
        });
    }

    //delete item
    function deleteFromCart(productId: number) {
        setCart((prevCart: CartItem[]) => prevCart.filter((item) => item.productId !== productId));
    }

    function getProductQuantity(id: number): number {
        return cart.find((item) => item.productId === id)?.quantity || 0;
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                deleteFromCart,
                // deleteFromCart,
                getProductQuantity,
                cartProducts: cart.map((cartItem) => {
                    const prod = products.find((p) => p.id === cartItem.productId)!;
                    return { ...prod, quantity: cartItem.quantity };
                }),
                cartTotal: cart
                    .map((ci) => (products.find((p) => p.id === ci.productId)?.price || 0) * ci.quantity)
                    .reduce((sum, n) => sum + n, 0),
            }}
        >
            {children}
        </CartContext.Provider>
    );
}


export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}