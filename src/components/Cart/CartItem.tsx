import classes from './CartItem.module.css';
import React, { FC, ReactNode } from 'react';

interface CartProps {
    children: ReactNode;
    onRemove: (id: string) => void;
    onAdd: (item: IItem) => void;
}

type Props = CartProps & IItem;

const CartItem: FC<Props> = ({ onRemove, name, onAdd, amount, price, id, description }) => {
    const Price = `$${price.toFixed(2)}`;

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{Price}</span>
                    <span className={classes.amount}>x {amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={() => onRemove(id)}>−</button>
                <button onClick={() => onAdd({ name, description, price, amount, id })}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
