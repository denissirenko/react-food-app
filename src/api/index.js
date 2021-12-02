import { API_URL } from './config';

export const api = Object.freeze({
    getAllCategories: {
        fetch: () => {
            return fetch(`${API_URL}/categories.php`);
        }
    },
    getMealById: {
        fetch: (mealId) => {
            return fetch(`${API_URL}lookup.php?i=${mealId}`);
        }
    },
    getFilterCategory: {
        fetch: (catName) => {
            return fetch(`${API_URL}filter.php?c=${catName}`);
        }
    }
});