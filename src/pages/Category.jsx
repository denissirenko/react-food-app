import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api/index';
import { Preloader, MealList } from '../components';

export const Category = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        api.getFilterCategory.fetch(name)
            .then(response => response.json())
            .then(data => setMeals(data.meals))
    }, [name]);

    return (
        <>
            {!meals.length ? (
                <Preloader />
            ) : (
                <>
                    <button 
                        style={{marginBottom: '1rem'}}
                        class="waves-effect waves-light btn"
                        onClick={() => navigate(-1)}
                    >button</button>
                    <div className='list'>
                        <MealList meals={meals} />
                    </div>
                </>
            )}
        </>
    )
}
