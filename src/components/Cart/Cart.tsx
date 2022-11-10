import React, { FC, useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

interface CartProps {
    onCartHide: () => void;
}

type Props = CartProps;

const Cart: FC<Props> = ({ onCartHide }) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id: string) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item: IItem) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItems = (
        <ul>
            {cartCtx.items.map(item => <CartItem
                onAdd={cartItemAddHandler}
                onRemove={cartItemRemoveHandler}
                key={item.id}
                name={item.name}
                id={item.id}
                price={item.price}
                amount={item.amount}
                description={item.description}
            >
                {item.name}
            </CartItem>)}
        </ul>
    );

    return (
        <Modal onCartHide={onCartHide}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onCartHide}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;