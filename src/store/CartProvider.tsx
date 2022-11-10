import React, { FC, ReactNode, useReducer, useState } from 'react';
import CartContext from './cart-context';
import { CartReducer, CartReducerActionType, CartState } from './CartReducer';

interface CartProviderProps {
    children: ReactNode;
}

type Props = CartProviderProps;

const defaultCartState: CartState = {
    items: [] as IItem[],
    totalAmount: 0,
};

const CartProvider: FC<Props> = ({ children }) => {

    const [cartState, cartDispatch] = useReducer(CartReducer, defaultCartState);

    const addItemToCartHandler = (item: IItem) => {
        cartDispatch({ type: CartReducerActionType.ADD_CART, payload: item });
    };
    const removeItemToCartHandler = (id: string) => {
        cartDispatch({ type: CartReducerActionType.REMOVE_CART, payload: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;