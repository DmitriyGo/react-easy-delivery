import React, { FC, MouseEvent, useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import axios from 'axios';

interface CartProps {
    onCartHide: () => void;
}

type Props = CartProps;

const Cart: FC<Props> = ({ onCartHide }) => {

    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

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

    const orderHandler = (event: MouseEvent<HTMLButtonElement>) => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (user: IUser) => {
        setIsSubmitting(true);
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/orders.json`, JSON.stringify({
            user,
            orderedItems: cartCtx.items,
        }));

        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clear();
    };

    const cartModalContent = <>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout ? <Checkout onCartHide={onCartHide} onSubmit={submitOrderHandler} /> : null}
        {!isCheckout ? <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={onCartHide}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div> : null}
    </>;

    const isSubmittingModalContent = <p>Sending order data...</p>;

    const didSubmittingModalContent = <>
        <p>Successfully sent the order!</p>
        <div className={classes.actions}>
            <button className={classes.button} onClick={onCartHide}>Close</button>
        </div>
    </>;

    return (
        <Modal onCartHide={onCartHide}>
            {!isSubmitting && !didSubmit ? cartModalContent : null}
            {isSubmitting ? isSubmittingModalContent : null}
            {!isSubmitting && didSubmit ? didSubmittingModalContent : null}
        </Modal>
    );
};

export default Cart;