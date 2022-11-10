import React, { FC, useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

type Props = IItem;

const MealItem: FC<Props> = ({ name, description, price, id }) => {

    const cartCtx = useContext(CartContext);

    const formattedPrice = `$${price?.toFixed(2)}`;

    const onAddToCart = (amount: number) => {
        cartCtx.addItem({ id, name, description, price, amount });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{formattedPrice}</div>
            </div>
            <MealItemForm onAddToCart={onAddToCart} id={id} />
        </li>
    );
};

export default MealItem;