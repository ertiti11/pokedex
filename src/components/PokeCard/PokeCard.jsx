import React, { useEffect, useState } from "react";
import GetPokemon from "../../services/GetPokemon";
import './PokeCard.css'
import Error from "../error/Error";



export default function PokeCard({params}) {
    const {keyword} = params
    
    const [pokemon, setPokemon] = useState('')
    
    useEffect(()=>{
        GetPokemon(keyword).then(poke=>setPokemon(poke))
    },[])

    if(pokemon){
        return(
            <div className="Card">
                <img src={pokemon.front_default} alt={pokemon.name} />
                <p>{pokemon.id}</p>
                <h1>{pokemon.name}</h1>
                <ul>
                    <li>height: {pokemon.height}</li>
                    <li>weight: {pokemon.weight}</li>
                </ul>
    
            </div>
        )}else{
        return <Error />
    }


    

}


