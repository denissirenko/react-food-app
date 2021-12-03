import { MealItem } from '../components';
export const MealList = ({meals = []}) => {
    return (
        <>
            {meals.map(el => (
                <MealItem key={el.idMeal} {...el} />
            ))}
        </>
    )
}
