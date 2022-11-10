import React, { FC, ReactNode } from 'react';
import classes from './Card.module.css';

interface CardProps {
    children: ReactNode
}

type Props = CardProps;

const Card: FC<Props> = ({children}) => {
    return (
        <div className={classes.card}>
            {children}
        </div>
    );
};

export default Card;