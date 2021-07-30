import { heroes } from "../data/heroes";

export const getHeroesByName = ( name ) => {

    if(name===""){
        return [];//porque es cuando no escribió nada
    }
    //minuscula
    name = name.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))
}