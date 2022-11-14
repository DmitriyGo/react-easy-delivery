import axios from 'axios';

export const fetchMeals = async () => {
    const response = await axios.get<IMeal[]>(`${process.env.REACT_APP_API_URL}/meals.json`);
    const loadedMeals = [];

    for (const dataKey in response.data) {
        loadedMeals.push({
            ...response.data[dataKey],
            id: dataKey,
        });
    }

    return loadedMeals;
};