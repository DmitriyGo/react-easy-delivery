import React, { FC } from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

interface MealsProps {
}

type Props = MealsProps;

const Meals: FC<Props> = ({}) => {
    return (
        <>
            <MealsSummary/>
            <AvailableMeals/>
        </>
    );
};

export default Meals;