import React, { FC, ReactNode, useReducer } from 'react';
import CartContext from './cart-context';
import { CartReducer, CartState } from './CartReducer';
import { AddCartAction, ClearCartAction, RemoveCartAction } from './CartActionCreators';

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
        cartDispatch(AddCartAction(item));
    };
    const removeItemToCartHandler = (id: string) => {
        cartDispatch(RemoveCartAction(id));
    };
    const ClearCartHandler = () => {
        cartDispatch(ClearCartAction());
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
        clear: ClearCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;