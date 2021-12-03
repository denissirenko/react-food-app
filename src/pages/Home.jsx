import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../api/index';

import { Preloader, CategoryList, Search } from '../components';

export const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const handelSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        );
        navigate({
            pathname,
            search: `?search=${str}`,
        })
    }

    useEffect(() => {
        api.getAllCategories.fetch()
            .then(response => response.json())
            .then(data => {
                setCatalog(data.categories)
                setFilteredCatalog(search ?
                    data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
                    ) : data.categories

                );
            })
    }, [search]);

    return (
        <>
            {!catalog.length ? (
                <Preloader />
            ) : (
                <>
                    <Search cb={handelSearch}/>
                    <CategoryList catalog={filteredCatalog} />
                </>
            )}
        </>
    )
}
