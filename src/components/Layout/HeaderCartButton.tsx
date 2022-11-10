import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import cl from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

interface HeaderCartButtonProps {
    onClick: () => void;
}

type Props = HeaderCartButtonProps;

const HeaderCartButton: FunctionComponent<Props> = ({ onClick }) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((previousValue, currentValue: { amount: number }) => {
        return previousValue + currentValue.amount;
    }, 0);

    const btnClasses = `${cl.button} ${btnIsHighlighted ? cl.bump : ''}`;

    useEffect(() => {
        if(cartCtx.items.length === 0) return;

        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [cartCtx.items]);

    return (<button className={btnClasses} onClick={onClick}>
        <span className={cl.icon}>
            <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={cl.badge}>
            {numberOfCartItems}
        </span>
    </button>);
};

export default HeaderCartButton;
