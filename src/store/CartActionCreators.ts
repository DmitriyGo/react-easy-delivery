import { AddCartActionType, CartReducerActionType, RemoveCartActionType } from './CartReducer';

export const AddCartAction = (payload: IItem) => ({
    type: CartReducerActionType.ADD_CART,
    payload,
} as AddCartActionType);

export const RemoveCartAction = (payload: string) => ({
    type: CartReducerActionType.REMOVE_CART,
    payload,
} as RemoveCartActionType);