import { Link } from 'react-router-dom';

export const MealItem = (props) => {
    const { idMeal, strMeal, strMealThumb } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title">{ strMeal }</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`}>
                    Watch recipe
                </Link>
            </div>
        </div>
    )
}
