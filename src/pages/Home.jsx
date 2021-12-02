import { useState, useEffect } from 'react';
import { api } from '../api/index';

import { Preloader } from '../components/Preloader';

export const Home = () => {

    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        api.getAllCategories.fetch()
            .then(data => setCatalog(data.categorie))
    }, []);

    return (
        <div>
            <Preloader />
        </div>
    )
}
