import { Reducer } from 'react';

export enum CartReducerActionType {
    ADD_CART,
    REMOVE_CART,
}

export type CartState = {
    items: IItem[];
    totalAmount: number;
};

export type AddCartActionType = {
    type: CartReducerActionType.ADD_CART;
    payload: IItem;
}

export type RemoveCartActionType = {
    type: CartReducerActionType.REMOVE_CART;
    payload: string;
}

type CartAction = AddCartActionType | RemoveCartActionType;


export const CartReducer: Reducer<CartState, CartAction> = (state, action) => {
    switch (action.type) {
        case CartReducerActionType.ADD_CART:
            if (state.items.map(x => x.id).includes(action.payload.id)) {
                const updatedTotalAmount =
                    state.totalAmount + action.payload.price * action.payload.amount;

                const existingCartItemIndex = state.items.findIndex(
                    (item) => item.id === action.payload.id,
                );
                const existingCartItem = state.items[existingCartItemIndex];
                let updatedItems;

                if (existingCartItem) {
                    const updatedItem = {
                        ...existingCartItem,
                        amount: existingCartItem.amount + action.payload.amount,
                    };
                    updatedItems = [...state.items];
                    updatedItems[existingCartItemIndex] = updatedItem;
                } else {
                    updatedItems = state.items.concat(action.payload);
                }

                return {
                    items: updatedItems,
                    totalAmount: updatedTotalAmount,
                };
            }
            return {
                items: state.items.concat(action.payload),
                totalAmount: state.totalAmount + action.payload.amount * action.payload.price,
            };
        case CartReducerActionType.REMOVE_CART: {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload,
            );
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingItem.price;
            let updatedItems;
            if (existingItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.payload);
            } else {
                const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        }

        default:
            return state;
    }
};