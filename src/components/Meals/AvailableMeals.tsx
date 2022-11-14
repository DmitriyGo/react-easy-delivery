import React from 'react';
import Card from '../UI/Card';

import classes from './AvailableMeals.module.css';

import AvailableMealsItems from './AvailableMealsItems';

const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    <AvailableMealsItems />
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;