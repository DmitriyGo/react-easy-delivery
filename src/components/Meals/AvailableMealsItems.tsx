import React from 'react';
import { useQuery } from '@tanstack/react-query';
import MealItem from './MealItem/MealItem';
import { fetchMeals } from '../../features/fetchMeals';

const AvailableMealsItems = ({}) => {

    const { data, isLoading, isError } = useQuery<IMeal[]>(['meals'], fetchMeals);

    const mealsList = data?.map(meal => (
        <MealItem amount={0} id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />
    ));

    if (isLoading) return (<h2>Loading...</h2>);

    if (isError) return (<h2>{`Error!Something went wrong!`}</h2>);

    return (<>{mealsList}</>);

};

export default AvailableMealsItems;