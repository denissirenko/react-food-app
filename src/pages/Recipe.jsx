import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api/index';
import { Preloader } from '../components';

export const Recipe = () => {
    const [recipe, setRecipe] = useState({});
    const {mealId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        api.getMealById.fetch(mealId)
            .then(response => response.json())
            .then(data => setRecipe(data.meals[0]))
    }, [mealId]);

    return (
        <div>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className='recipe'>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    { recipe.strArea ? (<h6>Area: {recipe.strArea}</h6>) : null }
                    <p>{recipe.strInstructions}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>

                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if(key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[`strMeasure${key.slice(13)}`]
                                                }
                                            </td>
                                        </tr>
                                    )
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                    {recipe.strYoutube ? (
                        <>
                            <h5 style={{marginTop: '2rem', marginBottom: '1rem'}}>Video Recipe</h5>
                            <div className="videoWrap">
                                <iframe 
                                    title={mealId}
                                    src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} 
                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                />
                            </div>
                        </>
                    ) : null}
                    <button 
                        style={{marginTop: '1.5rem'}}
                        class="waves-effect waves-light btn"
                        onClick={() => navigate(-1)}
                    >button</button>
                </div>
            )}
        </div>
    )
}
