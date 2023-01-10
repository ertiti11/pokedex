

export default async function GetPokemon(keyword){
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${keyword}/`
    // console.log(keyword);
    return await fetch(apiUrl)
        .then(res => res.json())
        .then(pokemon =>{
            
            
            
            // const pokemon = data.map((poke)=>{
            //     const {name} = poke
            //     return {name}
            // })
            const {front_default} = pokemon.sprites.other.dream_world
            const {id, name, height, weight,} = pokemon
            
            return {id, name, height, weight, front_default}
        });
            // {
            
            // const data = response.results
            // console.log(data);
            // const personajes = data.map((personaje)=>{
            //     const {image, name, id, status, species} = personaje
            //     return {image, name, id, status, species}
            // })
           
            // return personajes
        
    // })
    
    
        
    
}