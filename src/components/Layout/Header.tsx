import React, { FC } from 'react';
import MealsImage from '../../assets/meals.jpg'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

interface OwnProps {
    onShowCart: () => void
}

type Props = OwnProps;

const Header: FC<Props> = ({onShowCart}) => {

    return (<>
        <header className={classes.header}>
            <h1>ReactDelivery</h1>
            <HeaderCartButton onClick={onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImage}/>
        </div>
    </>);
};

export default Header;
