import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard';

/* CTRL + BORRAR = BORRA TODO ESPACIOS */
const HeroList = ({publisher}) => {
    
    
    const heroes = useMemo(() => getHeroesByPublisher(publisher) , [publisher]);

    return (
        <div className="row animate__animated animate__fadeIn">
            { heroes.map(( hero, i)=>(
                <HeroCard key={i} {...hero} />

            ))}
        </div>
    )
}

export default HeroList
