import React from 'react';

const CartContext = React.createContext({
    items: new Array<IItem>(),
    totalAmount: 0,
    addItem: (item: IItem) => {
    },
    removeItem: (id: string) => {
    },
    clear: () => {
    },
});

export default CartContext;