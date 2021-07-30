import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

const SearchScreen = ( { history }) => {
    
    const location = useLocation();
    
    //parseamos los query params 
    const { q= "" } = queryString.parse(location.search); //solo trabajar con el q 
    //si no hay params es undefined , por eso definimos por defecto : ""
    
    const initialForm = {
        searchText: q,
    };
    console.log("ga")
    const [ formValues, handleInputChange] = useForm( initialForm );
    
    const { searchText }  = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q) , [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }


    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            value={searchText}
                            onChange={handleInputChange}
                            name="searchText"
                            className="form-control"
                            autoComplete="off"
                        />
                        
                        <button
                            type="submit"
                            className="btn mt-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">

                    <h4>Results</h4>
                    <hr />
                    {
                        q==="" 
                            && 
                            <div className="alert alert-info">
                                Search a hero ...
                            </div>
                    }
                    {
                        q!=="" && heroesFiltered.length===0 &&
                        <div className="alert alert-danger">
                            There is not a hero with {q} ...
                        </div>
                    }
                    {
                        heroesFiltered.map((hero,i)=>(
                            <HeroCard key={i} {...hero} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
